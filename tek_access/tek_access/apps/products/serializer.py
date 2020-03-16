from rest_framework import serializers
from .models import Product, ProductCategory, Kits

# Product serializer


class ProductSerializer(serializers.ModelSerializer):
    product_category = serializers.StringRelatedField()

    class Meta:
        model = Product
        fields = "__all__"


class KitsSerializer(serializers.ModelSerializer):
    product_category = serializers.StringRelatedField()

    class Meta:
        model = Kits
        fields = "__all__"


class AddProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = ('id', 'name', 'description')

    def create(self, validated_data):
        product_category = ProductCategory.objects.create(**validated_data)
        return product_category


class AddProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'product_name', 'description', 'product_category',
                  'brand', 'manufacturer', 'image')

    def create(self, validated_data):
        product = Product.objects.create(**validated_data)
        return product


class AddKitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kits
        fields = ('id', 'product_name', 'description', 'product_category',
                  'brand', 'manufacturer', 'image')

    def create(self, validated_data):
        product = Kits.objects.create(**validated_data)
        return product
