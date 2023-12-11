from rest_framework import serializers
from .models import Category, Product, Price
from django_filters import rest_framework as filters

class ProductFilter(filters.FilterSet):

    category=filters.NumberFilter(field_name='category',lookup_expr='exact')
    name=filters.CharFilter(method='filter_by_search',lookup_expr='icontains')

    def filter_by_search(self,queryset,value):
        return queryset.filter(name__icontains=value) | queryset.filter(description__icontains=value)
    
    class Meta:
        model:Product
        fields:{
            'category':['exact'],
            'name': ['icontains'],
            }

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source= 'category.name')
    price_type_description = serializers.ReadOnlyField(source= 'price_type.name')
    
    class Meta:
        model = Product
        fields = ('id','name','category','category_name', 'description', 'price', 'price_type','price_type_description')
        filterset_class = ProductFilter
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'