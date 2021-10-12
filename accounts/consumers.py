from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from .models import Profile
from django.contrib.auth.models import User
from django.template.loader import render_to_string
from asgiref.sync import sync_to_async


class NewUserConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.channel_layer.group_add("users", self.channel_name)

        user = self.scope['user']
        if user.is_authenticated:
            await self.update_user_status(user, True)
            await self.send_status()

    async def disconnect(self, code):
        await self.channel_layer.group_discard("users", self.channel_name)
        user = self.scope['user']
        if user.is_authenticated:
            await self.update_user_status(user, False)
            await self.send_status()

    async def send_status(self):
        users = Profile.objects.all()

        await self.channel_layer.group_send(
            'users',
            {
                "type": "user_update",
                "event": "Change Status",
                "html_users": await self.render_page(users, "includes/users.html")
            }
        )

    async def user_update(self, event):
        await self.send_json(event)
        print('user_update', event)

    @sync_to_async
    def update_user_status(self, user, status):
        return Profile.objects.filter(user_id=user.pk).update(status=status)

    @sync_to_async
    def render_page(self, users, path):
        return render_to_string(
            path, {'users': users})
