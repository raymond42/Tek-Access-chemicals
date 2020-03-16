from django.urls import path, include
from .api import (
    AddProductAPI,
    GetProductsAPI,
    AddProductCategoryAPI,
    GetSingleProductViewSet,
    AddKitsAPI,
    GetKitsAPI,
    GetSingleKitViewSet)

urlpatterns = [
    path('api/product', AddProductAPI.as_view()),
    path('api/kit', AddKitsAPI.as_view()),
    path('api/products', GetProductsAPI.as_view()),
    path('api/kits', GetKitsAPI.as_view()),
    path('api/product/<pk>',
         GetSingleProductViewSet.as_view()),
    path('api/kit/<pk>',
         GetSingleKitViewSet.as_view()),
    path('api/category', AddProductCategoryAPI.as_view()),
]
