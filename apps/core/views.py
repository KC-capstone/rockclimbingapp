from django.shortcuts import render, redirect, HttpResponseRedirect
import json
from .models import Activity
from apps.core.forms import AddActivity
from apps.accounts.models import User
from django.contrib.auth.decorators import login_required
from django.core.exceptions import SuspiciousOperation
from django.contrib import messages
from django.contrib.auth import logout
from django.http import HttpResponse, JsonResponse
from django.utils import timezone

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

# This serves up frontend's index.html in the build directory to "kick things off"
def react_app(request):
    index_contents = open('./frontend/build/index.html').read()
    return HttpResponse(index_contents)

def log_out(request):
    status = 200
    data={}
    try:
        logout(request)
        data = {
            'status': "success",
            'data': None,
        }
    except:
        status = 404
        data = {
            'status': "error",
            'message': 'Logout attempt failed.',
        }
    data['status'] = status
    return JsonResponse(data, status=status,)

@login_required
def log_activity(request):
    # Reassign form data to clear input into instance of Activity model.    
    print('----view: log_activity')
    activitySubmission=json.loads(request.body)
    status = 200
    data={}
    try:
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
        data = {
            'status': "success",
            'data': None,
        }
    except:
        status = 404
        data = {
            'status': "error",
            'message': 'Activity failed to create.',
        }
    return JsonResponse(data, status=status, )

@login_required
def edit_activity(request, activity_id):
    print('----view: edit_activity', activity_id)
    activitySubmission=json.loads(request.body)
    status = 200
    data={}
    try:
        database_activity = Activity.objects.get(id=activity_id)
        # Reject if the ID of the logged-in user doesn't match the activity ID
        if database_activity.user != request.user:
            raise SuspiciousOperation("Attempted to edit different user's activity.")
        database_activity.title = activitySubmission['title']
        database_activity.rating = activitySubmission['rating']
        database_activity.route_type = activitySubmission['routeType']
        database_activity.description = activitySubmission['description']
        database_activity.date = activitySubmission['date']
        database_activity.location = activitySubmission['location']
        database_activity.climbs_completed = activitySubmission['climbsCompleted']
        database_activity.toughest_route_completed = activitySubmission['toughestRouteCompleted']
        database_activity.image = activitySubmission['imageLink']
        database_activity.youtube_link = activitySubmission['youtubeLink']
        database_activity.save()
        print('Save successful!')
        data = {
            'status': "success",
            'data': None,
        }
    except:
        status = 404
        data = {
            'status': "error",
            'message': 'Activity failed to edit.',
        }
    return JsonResponse(data, status=status,)

@login_required
def climb_detail_by_id(request, activity_id):
    print('----view: climb_detail_by_id')
    status = 200
    data = {}
    if request.method == 'GET':
        try:
            activity_data = Activity.objects.get(id=activity_id)
            activity = create_get_activity_data(activity_data)
            data = {
                'activities': {str(activity_id): activity},
                'activityIDs': [activity_id],
                'details': 'total_number_of_activities: 1',
                'showEditYN': True,
            }
            data = {
                'status': "success",
                'data': {
                    'activities': {str(activity_id): activity},
                    'activityIDs': [activity_id],
                    'details': 'total_number_of_activities: 1',
                    'showEditYN': True,
                },
            }
        except:
            status = 404
            data = {
            'status': "error",
            'message': 'Could not find an activity corresponding to the provided userID.',
            }
        return JsonResponse(data,status=status)
    if request.method == 'DELETE':
        activity_data = Activity.objects.get(id=activity_id)
        if activity_data.user != request.user:
            # raise SuspiciousOperation("Attempted to delete different user's bucket")
            data = {
            'status': "fail",
            "data" : {"userID": "Attempted to delete different user's bucket"}
            }
            status = 401
        else:
            try:
                activity_data.removedDate = timezone.now()
                activity_data.save()
                data = {
                    'status': "success",
                    'data': None,
                }
            except:
                status = 400
                data = {
                    'status': "error",
                    'message': 'Unable to delete activity.',
                }
        return JsonResponse(data,status=status)

def climb_detail_most_recent(request):
    print('----view: climb_detail_most_recent')
    status = 200
    data = {}
    try:
        activity_data = Activity.objects.filter(user=request.user, removedDate__isnull=True).order_by('-date')[:1]
        activities = {}
        for activity in activity_data:
            activities['activity'] = create_get_activity_data(activity)
        data = {
            'status': "success",
            'data': { 'activities': activities }
        }
    except:
        data = {
            'status': "fail",
            'data': { 'activity': 'Could not find an activity corresponding to the provided userID.' }
        }
        status = 404
    return JsonResponse(data,status=status)

@login_required
def climb_detail_all_climbs(request):
    status = 200
    data = {}
    start_position = 0
    if 'startPos' in request.GET:
        start_position = int(request.GET['startPos'])
    try:
        activity_data = Activity.objects.filter(user=request.user, removedDate__isnull=True).order_by('-date')
        activities = {}
        activity_ids = []
        number_of_activities = len(activity_data)
        details = {'total_number_of_activities': number_of_activities,}
        end_position = min(start_position + 3, number_of_activities)
        for i in range(start_position,end_position):
            activities[str(activity_data[i].id)] = create_get_activity_data(activity_data[i])
            activity_ids.append(activity_data[i].id)
        data = {
            'status': "success",
            'data': {
                    'activities': activities,
                    'activityIDs': activity_ids,
                    'details': details
            }
        }
    except:
        data = {
            'status': "fail",
            'data': { 'activity': 'Could not gather activities corresponding to the provided userID.' }
        }
        status = 404
    return JsonResponse(data,status=status)

def create_get_activity_data(activity_data):
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
            "climbID": activity_data.id,
            }
    return data
