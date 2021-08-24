from django.shortcuts import render, redirect, HttpResponseRedirect
import json
from rest_framework import viewsets
from .serializers import ActivitySerializer, UserSerializer
from .models import Activity
from apps.core.forms import AddActivity
from apps.accounts.models import User


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


def log_activity(request):
    #this iterator is just to make visual space in terminal for testing
    i = 0
    while i < 5:
        print(" ")
        i += 1

    #form submission processing happens here    
    print('----view: log_activity')
    print(request.body)
    activitySubmission=json.loads(request.body)
    print('heres the activity submission:', activitySubmission)
    print('Submission title: ', activitySubmission['title'])

    entered_user = request['user']
    print('entered user: ', entered_user)
    entered_title = activitySubmission['title']
    entered_rating = activitySubmission['rating']
    entered_route_type = activitySubmission['routeType']
    entered_description = activitySubmission['description'] #bouldering
    entered_date = activitySubmission['date']
    entered_location = activitySubmission['location']
    entered_climbs_completed = activitySubmission['climbsCompleted']
    entered_toughest_route_completed = activitySubmission['toughestRouteCompleted']
    entered_image = activitySubmission['imageLink']
    entered_youtube_link = activitySubmission['youtubeLink']

    print(entered_title)

    #trying to plug in data from request into model
    ### HERES THE ISSUES -- what is the proper way to instantiate the model?
    submission = Activity.objects.create(
        #user = entered_user,
        title = entered_title,
        rating = entered_rating,
        route_type = entered_route_type,
        description = entered_description,
        date = entered_date,
        location = entered_location,
        climbs_completed = entered_climbs_completed,
        toughest_route_completed = entered_toughest_route_completed,
        image = entered_image,
        youtube_link = entered_youtube_link,
    )

    print(submission)

    #new_activity = Activity().save()
    #new_activity.user = request.user
    #print(request.POST['title'])
    submission.save()

    return HttpResponse('')
    #return HttpResponseRedirect("/profile")



def log_activity_greg(request):
    print('----view: log_activity')
    activitySubmission = request
    print(activitySubmission)
    new_activity = Activity().save()
    new_activity.user = request.user
    print(request.POST['title'])
    new_activity.save()
    data=json.loads(request.body)
    print(data)
    return HttpResponse('')

    #return redirect('/profile')


### Attempt at API

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
