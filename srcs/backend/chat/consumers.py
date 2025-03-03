# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth.models import User
from .models import ChatMessage  # Import the model
from asgiref.sync import sync_to_async

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.sender_name = self.scope['url_route']['kwargs']['sender']
        self.receiver_name = self.scope['url_route']['kwargs']['receiver']
        # Sort sender and receiver alphabetically to ensure consistent room name
        users = sorted([self.sender_name, self.receiver_name])
        self.room_group_name = f'chat_{users[0]}_{users[1]}'

        # Fetch User objects for sender and receiver asynchronously
        try:
            self.sender = await sync_to_async(User.objects.get)(username=self.sender_name)
            self.receiver = await sync_to_async(User.objects.get)(username=self.receiver_name)
        except User.DoesNotExist:
            print(f"User not found: sender={self.sender_name}, receiver={self.receiver_name}")
            await self.close()
            return

        print(f"Connecting WebSocket: sender={self.sender_name}, receiver={self.receiver_name}, room={self.room_group_name}")

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        print(f"Disconnected: {self.sender_name}, close_code={close_code}")

    async def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json["message"]
        except (json.JSONDecodeError, KeyError):
            print(f"Invalid message format: {text_data}")
            return

        print(f"Received message from {self.sender_name}: {message}")

        # Save the message to the database asynchronously
        await sync_to_async(ChatMessage.objects.create)(
            sender=self.sender,
            receiver=self.receiver,
            message=message,
        )

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": self.sender_name,  # Send username for frontend compatibility
            }
        )

    async def chat_message(self, event):
        message = event["message"]
        sender = event["sender"]

        await self.send(text_data=json.dumps({
            "type": "chat",
            "message": message,
            "sender": sender,
        }))
        print(f"Sent message to {self.sender_name}: {message} from {sender}")