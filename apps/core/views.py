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



    
    return redirect('/profile')

# Nick: trying to CRUD data using FORMS, don't need to worry about this

def add_activity(request):
    if request.method == 'POST':
        form = AddActivity(request.POST)
        # print("form: ", form)
        print("request.POST: ", request.POST)
        print("form.cleaned_data: ", form.cleaned_data)

        if form.is_valid:
            #entered_user = form.cleaned_data['user']
            entered_title = form.cleaned_data['title']
            entered_rating = form.cleaned_data['rating']
            entered_route_type = form.cleaned_data['route_type']
            entered_description = form.cleaned_data['description']
            entered_date = form.cleaned_data['date']
            entered_location = form.cleaned_data['location']
            entered_climbs_completed = form.cleaned_data['climbs_completed']
            entered_toughest_route_completed = form.cleaned_data['toughest_route_completed']
            entered_image = form.cleaned_data['image']
            entered_youtube_link = form.cleaned_data['youtube_link']
            entered_created = form.cleaned_data['created']
            entered_lastModified = form.cleaned_data['lastModified']
            entered_removedDate = form.cleaned_data['removedDate']

            Activity.objects.create(
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
                created = entered_created,
                lastModified = entered_lastModified,
                removedDate = entered_removedDate,
            )

            return HttpResponseRedirect("/profile")

    else:
        form = Activity()

    return render(request, '', {'form': form})

### Attempt at API

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
