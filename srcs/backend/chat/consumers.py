import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from django.contrib.auth.models import User

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        # Get sender & receiver from URL route parameters
        self.sender = self.scope['url_route']['kwargs']['sender']
        self.receiver = self.scope['url_route']['kwargs']['receiver']

        # Verify that sender and receiver are valid users
        try:
            sender_user = User.objects.get(username=self.sender)
            receiver_user = User.objects.get(username=self.receiver)
        except User.DoesNotExist:
            self.close()
            return

        # Create a unique private chat room for the two users
        self.room_group_name = f"chat_{min(self.sender, self.receiver)}_{max(self.sender, self.receiver)}"

        # Add user to this private chat room
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        """ Notify users when someone disconnects """
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": f"{self.sender} has left the chat.",
                "sender": "System",  # System message
            }
        )

        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        """ Handle incoming messages and send them only to the recipient """
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": "chat_message",
                "message": message,
                "sender": self.sender,  # Include sender's username
            }
        )

    def chat_message(self, event):
        """ Send the message only to users in the chat room """
        message = event["message"]
        sender = event["sender"]  # Get sender's username

        self.send(text_data=json.dumps({
            "type": "chat",
            "message": message,
            "sender": sender,  # Send sender's username to the frontend
        }))