from django.shortcuts import render, redirect, HttpResponseRedirect
import json
from rest_framework import viewsets
from .serializers import ActivitySerializer, UserSerializer
from .models import Activity
from apps.core.forms import AddActivity
from apps.accounts.models import User
from django.contrib import messages


# Two example views. Change or delete as necessary.
def home(request):

    context = {
        'example_context_variable': 'Change me.',
    }

    return render(request, 'pages/home.html', context)

def about(request):
    context = {
    }

    return render(request, 'pages/about.html', context)

# This was added per instructions in the django-kcproject-starter README for adding a React App.
# This is supposed to serve up frontend's index.html in the build directory to "kick things off"?

from django.http import HttpResponse
def react_app(request):
    index_contents = open('./frontend/build/index.html').read()
    return HttpResponse(index_contents)


# Greg: attempting server setup
from django.http import JsonResponse
def example_api_view(request):
    return JsonResponse({
        'testing': 'Does this work?'
    })

#Called on climb form submission -- creates Activity model and fills with submission data.
def log_activity(request):
    #this iterator is just to make visual space in terminal for testing.
    i = 0
    while i < 5:
        print(" ")
        i += 1

    # Reassign form data to clear input into instance of Activity model.    
    print('----view: log_activity')
    activitySubmission=json.loads(request.body)

    print('request.user: ', request.user)
    print('request.user.id: ', request.user.id)
    print('Activity submission (AKA request.body):', activitySubmission)
    print('Check if attribute works properly -- Submission title: ', activitySubmission['title'])

    # Create instance of activity model and plug in data from form, then save to DB.
    submission = Activity.objects.create(
        user = request.user,
        title = activitySubmission['title'],
        rating = activitySubmission['rating'],
        route_type = activitySubmission['routeType'],
        description = activitySubmission['description'],
        date = activitySubmission['date'],
        location = activitySubmission['location'],
        climbs_completed = activitySubmission['climbsCompleted'],
        toughest_route_completed = activitySubmission['toughestRouteCompleted'],
        image = activitySubmission['imageLink'],
        youtube_link = activitySubmission['youtubeLink'],
    )

    submission.save()
    print('Save successful!')
    return HttpResponse('')
    #return HttpResponseRedirect("/profile")


### Attempt at API

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
