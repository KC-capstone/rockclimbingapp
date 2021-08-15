from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from apps.core import views


router = routers.DefaultRouter()
router.register(r'activities', views.ActivityViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('profile/', views.react_app, name='profile'), # added to connect Django app to React app
    #path('api/just/testing/', views.example_api_view),
    path('logactivity/', views.log_activity),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
