from rest_framework import serializers
from apps.accounts.models import User
from .models import Activity

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = (
        'id',
        'user',
        'title',
        'rating',
        'route_type',
        'description',
        'date',
        'location',
        'climbs_completed',
        'toughest_route_completed',
        'image',
        'youtube_link',
        'created',
        'lastModified',
        'removedDate')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = (
        'id',
        'username',
        'first_name',
        'last_name',
        'email')