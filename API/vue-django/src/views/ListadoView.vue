<template>
    <div class="album py-3 bg-body-tertiary">
        <h1>Listado</h1>
        <RouterLink class="btn btn-primary" to="/create-product">Agregar Producto</RouterLink>
        <table class="table mb-0 bg-white w-75 mx-auto p-2">
            <thead class="bg-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Datos del Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="product in products" :key="product.id">
                    <tr>
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category_name }}</td>
                        <td>
                            <p>{{ product.description }}</p>
                        </td>
                        <td>
                            <p class="fw-normal mb-1">{{ product.price_type_description }}</p>
                            <p class="text-muted mb-0">{{ product.price }}</p>
                        </td>
                        <td>
                            <button type="button" class="btn btn-link btn-rounded btn-sm fw-bold">
                               <a>View </a>
                               <a>Edit </a>
                               <a>Delete </a>
                            </button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
  
<script setup>
import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';





const { products, getAllProducts } = useProducts();

onMounted(getAllProducts)

</script>