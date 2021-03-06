from django.urls import path, include
from apps.core import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('profile', views.react_app, name='profile'), # added to connect Django app to React app
    path('logout', views.log_out, name="log_out"),
    path('logactivity', views.log_activity),
    path('editactivity/<activity_id>', views.edit_activity),
    path('climbdetail/<activity_id>', views.climb_detail_by_id),
    path('climb_detail_most_recent', views.climb_detail_most_recent),
    path('climb_detail_all_climbs', views.climb_detail_all_climbs),
]
