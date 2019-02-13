from django.shortcuts import render

# Create your views here.
from blog.models import Post
from blog.serializers import PostSerializer
from rest_framework import generics

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer