<template>
    <div class="mx-4">
        <h4 class="mb-3">Informacón del Producto</h4>
        <div class="table-responsive">
            <table class="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Datos del precio</th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td>{{ products.id }}</td>
                        <td>{{ products.name }}</td>
                        <td>{{ products.category_name }}</td>
                        <td>{{ products.description }}</td>
                        <td>
                            <p class="fw-normal mb-1">{{ products.price_type_description }}</p>
                            <p class="text-muted mb-0">{{ products.price }}</p>
                        </td>

                    </tr>

                </tbody>
            </table>
            <RouterLink :to="{ name: 'productos' }">
                <button class="btn btn-success">Regresar</button>
            </RouterLink>
        </div>

    </div>
</template>


  
<script setup>

import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { products, getSingleProduct } = useProducts();
const route = useRoute();

onMounted(() => {
    getSingleProduct(route.params.id);
})



</script>