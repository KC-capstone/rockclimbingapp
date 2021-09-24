from django.shortcuts import render, redirect, HttpResponseRedirect
import json
from rest_framework import viewsets
from .serializers import ActivitySerializer, UserSerializer
from .models import Activity
from apps.core.forms import AddActivity
from apps.accounts.models import User
from django.contrib import messages
from django.http import HttpResponse, JsonResponse

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

def react_app(request):
    index_contents = open('./frontend/build/index.html').read()
    return HttpResponse(index_contents)


# Greg: attempting server setup

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

def climb_detail(request):
    print('----view: climb_detail')
    status = 200
    data = {}
    try:
        activity_data = Activity.objects.get(id=2)
        print('activity data:', activity_data)
        data = {
            "title": activity_data.title,
            "rating": activity_data.rating,
            "routeType": activity_data.route_type,
            "description": activity_data.description,
            "date": activity_data.date,
            "location": activity_data.location,
            "climbsCompleted": activity_data.climbs_completed,
            "toughestRouteCompleted": activity_data.toughest_route_completed,
            "imageLink": activity_data.image,
            "youtubeLink": activity_data.toughest_route_completed,
            }
    except:
        data['message'] = "Activity Not Found"
        status = 404
    return JsonResponse(data,status=status)


### Attempt at API

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
