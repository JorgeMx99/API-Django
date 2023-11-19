from django.urls import path
from.views import CategoryViewSet, ProductViewSet, PriceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('products', ProductViewSet, basename='products')
router.register('categories', CategoryViewSet, basename='categories')
router.register('prices', PriceViewSet, basename='prices')

urlpatterns = router.urls