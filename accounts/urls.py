from django.urls import path
from django.contrib.auth import views as auth_views
from. import views
 
urlpatterns = [
    path('', views.new_user, name='new_user'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
