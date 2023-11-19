<template>
    <div class="album py-3 bg-body-tertiary">


        <h1>Listado</h1>
        <RouterLink class="btn btn-primary" to="/create-product">Agregar Producto</RouterLink>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Datos del Precio</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="product in products" :key="product.id">
                    <tr>
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category_name }}</td>
                        <td>{{ product.description }}</td>
                        <td>{{ product.price_type }}</td>
                        <td>{{ product.price }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';

const {products, getAllProducts} = useProducts();

onMounted(getAllProducts)

</script>