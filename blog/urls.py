from django.urls import path, include
from . import views

urlpatterns = [
    path("api/posts/", views.PostListCreate.as_view()),
    path('', include('frontend.urls')),
]
