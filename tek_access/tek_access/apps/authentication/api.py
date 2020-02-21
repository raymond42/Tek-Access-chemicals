from .models import Authentication
from rest_framework import viewsets, permissions
from ...serializer import AuthenticationSerializer

# Authentication viewset


class AuthenticationViewSet(viewsets.ModelViewSet):
    queryset = Authentication.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AuthenticationSerializer
