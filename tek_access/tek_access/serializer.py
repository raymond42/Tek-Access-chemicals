from rest_framework import serializers
from .apps.authentication.models import Users
from django.contrib.auth import authenticate

# Authentication serializer


class AuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"
