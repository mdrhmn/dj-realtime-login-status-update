from django.shortcuts import render
from django.contrib.auth.models import User
from .models import *


def new_user(request):
    users = Profile.objects.all()
    return render(request, 'new_user.html', {'users': users})
