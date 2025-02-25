import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from django.contrib.auth.models import User

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.sender = self.scope['url_route']['kwargs']['sender']
        self.receiver = self.scope['url_route']['kwargs']['receiver']

        # Log connection details for debugging
        print(f"WebSocket connection: sender={self.sender}, receiver={self.receiver}")

        # Verify sender and receiver exist in the database
        try:
            sender_user = User.objects.get(username=self.sender)
            receiver_user = User.objects.get(username=self.receiver)
        except User.DoesNotExist:
            print(f"User not found: sender={self.sender}, receiver={self.receiver}")
            self.close(code=4001, reason="Invalid user")
            return

        # Create a symmetric room group name
        self.room_group_name = f"chat_{min(self.sender, self.receiver)}_{max(self.sender, self.receiver)}"
        print(f"Joining group: {self.room_group_name}")

        # Add this connection to the group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        print(f"Connection accepted for {self.sender}")

    def disconnect(self, close_code):
        # Notify group of disconnection
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": f"{self.sender} has left the chat.",
                "sender": "System",
            }
        )

        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )
        print(f"Disconnected: {self.sender}, close_code={close_code}")

    def receive(self, text_data):
        try:
            text_data_json = json.loads(text_data)
            message = text_data_json["message"]
        except (json.JSONDecodeError, KeyError):
            print(f"Invalid message format: {text_data}")
            return

        print(f"Received message from {self.sender}: {message}")

        # Broadcast message to the group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": self.sender,
            }
        )

    def chat_message(self, event):
        message = event["message"]
        sender = event["sender"]

        # Send message to the connected client
        self.send(text_data=json.dumps({
            "type": "chat",
            "message": message,
            "sender": sender,
        }))
        print(f"Sent message to {self.sender}: {message} from {sender}")