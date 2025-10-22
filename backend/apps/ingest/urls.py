from django.urls import path
from . import views

urlpatterns = [
    path('samples/', views.list_samples, name='list_samples'),
]
