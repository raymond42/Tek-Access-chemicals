from rest_framework import routers
from django.urls import path, include
from knox import views as knox_views
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = router.urls
