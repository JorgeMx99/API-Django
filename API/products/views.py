from rest_framework import viewsets
from .models import Category, Product
from .serializer import CategorySerializer, ProductSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    
    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category')
        
        if category:
            queryset = queryset.filter(category=category)


        search = self.request.query_params.get('search',None)
        if search is not None:
            queryset = queryset.filter(name__icontains=search)| queryset.filter(description__icontains=search)
        return queryset
    
        
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


