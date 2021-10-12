from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/new-user/', consumers.NewUserConsumer.as_asgi()),
]
