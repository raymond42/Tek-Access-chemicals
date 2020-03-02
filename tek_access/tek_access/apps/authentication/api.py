from .models import User
from rest_framework import viewsets, permissions, generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from ...serializer import AuthenticationSerializer, RegisterSerializer, LoginSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": AuthenticationSerializer(
                user, context=self.get_serializer_context()).data,
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": AuthenticationSerializer(
                user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class GetUserAPI(generics.RetrieveAPIView):
    queryset = User.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = AuthenticationSerializer

    def get_object(self):
        return self.request.user
