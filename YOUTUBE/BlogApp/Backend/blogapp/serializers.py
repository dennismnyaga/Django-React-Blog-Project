from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
        
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        
        
        
# class UserRegSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username', 'password']




class UserRegSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=150)
    # email = serializers.EmailField()
    password = serializers.CharField(max_length=128, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            # email=validated_data['email'],
            password=validated_data['password']
        )
        return user
