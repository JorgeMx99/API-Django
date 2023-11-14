from rest_framework import serializers
from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source= 'category.name')
    price_type_description = serializers.ReadOnlyField(source= 'get_price_type_display')
    class Meta:
        model = Product
        fields = ('id','image','name','category','category_name', 'description', 'price', 'price_type','price_type_description')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'