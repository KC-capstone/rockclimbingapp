from django.shortcuts import render, redirect
from django import forms
from django.contrib.auth.models import User
from django.contrib import auth
from .models import Activity
    


class AddActivity(forms.ModelForm):
    class Meta:
        model = Activity
        fields = ['id',
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
    ]
