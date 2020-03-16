from django.db import models

# Create your models here.


class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    product_name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=1000)
    product_category = models.ForeignKey(
        ProductCategory, on_delete=models.CASCADE, null=True)
    brand = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    image = models.URLField(
        default='https://res.cloudinary.com/darbbvujm/image/upload/'
                'v1584106702/product_default_nauamx.png'
    )

    def __str__(self):
        return self.product_name


class Kits(models.Model):
    product_name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=1000)
    product_category = models.ForeignKey(
        ProductCategory, on_delete=models.CASCADE, null=True)
    brand = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    image = models.URLField(
        default='https://res.cloudinary.com/darbbvujm/image/upload/'
                'v1584106702/product_default_nauamx.png'
    )

    def __str__(self):
        return self.product_name
