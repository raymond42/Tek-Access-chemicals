# Generated by Django 3.0.3 on 2020-03-13 14:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('brand', models.CharField(max_length=100)),
                ('manufacturer', models.CharField(max_length=100)),
                ('image', models.URLField(default='https://res.cloudinary.com/darbbvujm/image/upload/v1584106702/product_default_nauamx.png')),
                ('product_category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.ProductCategory')),
            ],
        ),
    ]
