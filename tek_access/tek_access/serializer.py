from rest_framework import serializers
from .apps.authentication.models import Authentication

# Authentication serializer


class AuthenticationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Authentication
        fields = '__all__'
