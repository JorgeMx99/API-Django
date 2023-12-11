from django.db import models

# Modelo categorias.
class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nombre')

    class Meta:
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
        ordering = ['name']

    def __str__(self):
        return self.name   
    
# Modelo Tipos de Precio.
class Price(models.Model):
    name = models.CharField(max_length=255, verbose_name='Nombre')

    class Meta:
        verbose_name = 'Tipo precio'
        verbose_name_plural = 'Tipo precios'
        ordering = ['name']

    def __str__(self):
        return self.name   

# Modelo productos.
class Product(models.Model):
   
    name = models.CharField(max_length=255, verbose_name='Nombre')
    image = models.ImageField(upload_to='products', default='default.png', verbose_name='Imagen')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Categoria')
    description = models.TextField(verbose_name='Descripción')  
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name='Precio')
    price_type = models.ForeignKey(Price, on_delete=models.CASCADE, verbose_name='Tipo de Precio')
    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['name']

    def __str__(self):
        return self.name   