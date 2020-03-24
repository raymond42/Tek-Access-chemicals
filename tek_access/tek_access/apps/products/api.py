from rest_framework import generics, permissions, viewsets
from .models import Product, Kits
from rest_framework.response import Response
from .serializer import (
    ProductSerializer,
    AddProductSerializer,
    AddProductCategorySerializer,
    AddKitsSerializer,
    KitsSerializer)


class AddProductAPI(generics.GenericAPIView):
    serializer_class = AddProductSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response({
            "product": ProductSerializer(
                product, context=self.get_serializer_context()).data
        })


class AddKitsAPI(generics.GenericAPIView):
    serializer_class = AddKitsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product = serializer.save()
        return Response({
            "product": AddKitsSerializer(
                product, context=self.get_serializer_context()).data
        })


class AddProductCategoryAPI(generics.GenericAPIView):
    serializer_class = AddProductCategorySerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        product_category = serializer.save()
        return Response({
            "product_category": AddProductCategorySerializer(
                product_category, context=self.get_serializer_context()).data
        })


class GetProductsAPI(generics.ListAPIView):
    queryset = Product.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductSerializer

    def get_object(self):
        return self.request.product_name


class GetKitsAPI(generics.ListAPIView):
    queryset = Kits.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = KitsSerializer

    def get_object(self):
        return self.request.product_name


class GetSingleProductViewSet(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class GetSingleKitViewSet(generics.RetrieveAPIView):
    queryset = Kits.objects.all()
    serializer_class = KitsSerializer
