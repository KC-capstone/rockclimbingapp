from django.db import models
from django.forms import ModelForm
from apps.accounts.models import User
# from apps.core.models import 

# Create your models here.

class Activity(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    title = models.CharField(max_length=200)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    route_type = models.DateTimeField()
    description = models.CharField(max_length=200)
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    climbs_completed = models.PositiveSmallIntegerField()
    toughest_route_completed = models.CharField(max_length=5)
    image = models.CharField(max_length=1000)
    youtube_link = models.CharField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True) # Add current date
    lastModified = models.DateTimeField(auto_now=True)
    removedDate = models.DateTimeField(null=True)


# searching on climbs page:
#   - not sure if it needs to be a form or just a query
