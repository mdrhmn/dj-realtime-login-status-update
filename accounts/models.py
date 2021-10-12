from django.db import models
from django.conf import settings


class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"Profile of {self.user.username}"
