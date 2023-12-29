<template>
    <div class="album py-3 bg-body-tertiary">
        <h1>Listado</h1>
        <RouterLink class="btn btn-primary" to="/create-product">Agregar Producto</RouterLink>
        <div class="alert alert-warning" role="alert" v-if="error">
            Oops! Se ha producido un error: {{ error.message }}
        </div>
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

                <tr v-for="product,i in products" :key="product.id">
                    <th scope="row">{{++i}}</th>
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
                        <RouterLink :to="{ name: 'view', params: { id: product.id } }" class="ms-2"><i
                                class="bi bi-eye "></i>
                        </RouterLink>
                        <RouterLink :to="{ name: 'edit', params: { id: product.id } }" class="ms-2"><i
                                class="bi  bi-pencil-square"></i></RouterLink>
                        <a class="ms-2"><i class="bi bi-trash" @click="deleteProduct(product.id)"></i></a>
                    </td>
                </tr>

            </tbody>
        </table>

        <div class="alert alert-danger" role="alert" v-if="delError">
            No se ha podido borrar este producto: {{ delError.message }}
        </div>
        <div class="alert alert-success" role="alert" v-if="statusCode === 200">
            Producto eliminado correctamente
        </div>
    </div>
</template>
  
<script setup>
import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';

const { delError, error, statusCode, products, getAllProducts, deleteProduct } = useProducts();

onMounted(getAllProducts)



</script>