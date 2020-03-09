from rest_framework import viewsets, permissions, generics, permissions
from rest_framework.response import Response
from .models import Users
from knox.models import AuthToken
from ...serializer import AuthenticationSerializer


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = AuthenticationSerializer

    def get_queryset(self):
        return self.request.user.name.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
