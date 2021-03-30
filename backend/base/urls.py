from django.urls import path
from . import views


urlpatterns = [
  path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

  path('users/register/', views.registerUser, name='register'),

  path('users/profile/', views.getUserProfile, name = 'users-profile'),
  path('users/', views.getUsers, name = 'users-profile'),
  path('products', views.getUsers, name = 'users'),
  path('products/<str:pk>/', views.getProduct, name = 'product'),
]