from django.shortcuts import render


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
    print(request)
