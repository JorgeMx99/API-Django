<template>
    <div class="mx-4">
        <h4 class="mb-3">Editar Producto</h4>
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert" v-if="error">
            Oops! Se ha producido un error: {{ error.message }}
            <RouterLink :to="{ name: 'productos' }">
                <button class="btn btn-secondary">Regresar</button>
            </RouterLink>
        </div>
        <form class="needs-validation" @submit.prevent="handleUpdateProductForm" v-else-if="products">
            <div class="row">

                <div class="col-md-1 mb-3">
                    <label>ID</label>
                    <input v-model.trim="products.id" disabled id="id" type="text" class="form-control" placeholder=""
                        required>
                </div>
                <div class="col-md-5 mb-3">
                    <label>Nombre</label>
                    <input v-model.trim="products.name" id="name" type="text" class="form-control" placeholder="" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label>Categoria</label>
                    <select v-model.trim="products.category" id="category" class="form-control" placeholder="" required>
                        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name
                        }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="mb-3">
                <label>Descripción <span class="text-muted">(Optional)</span></label>
                <textarea v-model.trim="products.description" id="description" class="form-control"></textarea>
            </div>

            <div class="row">
                <div class="col-md-4 mb-3">
                    <label>Tipo de Precio</label>
                    <select v-model.trim="products.price_type" class="form-control" placeholder="">
                        <option v-for="price in prices" :value="price.id" :key="price.id">{{ price.name }}
                        </option>
                    </select>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Precio</label>
                    <input v-model.trim="products.price" id="price" type="number" class="form-control" placeholder=""
                        required>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Cargar imagen</label>
                    <input type="file" id="image" @change="handleImageChange" accept="image/*" />
                </div>

                <div class="mb-3">
                    <button class="btn btn-success mx-4" type="submit">Guardar</button>
                    <RouterLink :to="{ name: 'productos' }">
                        <button class="btn btn-secondary">Regresar</button>
                    </RouterLink>
                </div>

            </div>
        </form>

        <div class="alert alert-success" role="alert" v-if="statusCode === 200">
            Producto Actualizado Correctamente
        </div>
    </div>
</template>


  
<script setup>
import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const { products, statusCode, error, getSingleProduct, UpdateProduct } = useProducts();
const { categories, getAllCategories } = useProducts();
const { prices, getAllPrices } = useProducts();


const { params } = useRoute()

onMounted(() => {
    getSingleProduct(params.id),
        getAllCategories(),
        getAllPrices()
});


function handleUpdateProductForm() {
    UpdateProduct(params.id, products.value)
}



const handleImageChange = (event) => {
    const file = event.target.files[0];
    products.image = file;
};

</script>