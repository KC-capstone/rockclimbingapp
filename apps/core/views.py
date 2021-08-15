from django.shortcuts import render, redirect
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
    print(request.POST)
    new_activity = AddActivity().save(commit=False)
    new_activity.user = request.user
    #print(request.POST[0])
    # new_activity.save()
    
    return redirect('/profile')



### Attempt at API
class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
