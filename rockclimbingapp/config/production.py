# Settings that are unique to production go here
from .base import *  # noqa

DEBUG = False

# Configure Django App for Heroku.
import django_heroku
django_heroku.settings(locals())

DATABASES['default']['ENGINE'] ='django.db.backends.sqlite3'
