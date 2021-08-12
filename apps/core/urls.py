from django.urls import path

from apps.core import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('profile/', views.react_app, name='profile'), # added to connect Django app to React app
    path('api/just/testing/', views.example_api_view),
]
