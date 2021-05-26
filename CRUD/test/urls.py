from django.urls import path
from django.conf.urls import url
from django.urls import path,include
from rest_framework import routers
from . import views

urlpatterns = [
    
    # path('', views.index, name='index'),
    path('info/', views.APIView.as_view()),
    path('Delete/<int:pk>/', views.DetialSet.as_view()),
    path('Update/<int:pk>/', views.UpdateSet.as_view()),
]
