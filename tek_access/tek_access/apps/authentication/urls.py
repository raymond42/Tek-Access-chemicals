from rest_framework import routers
from .api import AuthenticationViewSet

router = routers.DefaultRouter()
router.register('api/user', AuthenticationViewSet, 'authentication')

urlpatterns = router.urls