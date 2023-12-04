<template>
    <div class="mx-4">
        <h4 class="mb-3">Editar Producto</h4>
        <form class="needs-validation" @submit.prevent="handleUpdateProductForm">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label>Nombre</label>
                    <input v-model.trim="products.name" id="name" type="text" class="form-control" placeholder="" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label>Categoria</label>
                    <select v-model.trim="products.category" id="category" class="form-control" placeholder="" required>
                        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}
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
                    <input id="image" type="file" ref="file" class="form-control">
                </div>

                <div class="mb-3">
                    <button class="btn btn-success" type="submit">Guardar</button>
                </div>
            </div>


        </form>
    </div>
</template>


  
<script setup>
import useProducts from '@/compostables/productos';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const { categories, getAllCategories } = useProducts();
const { prices, getAllPrices } = useProducts();
const { products, getSingleProduct, UpdateProduct } = useProducts();

const { params } = useRoute()

onMounted(() => {
    getSingleProduct(params.id)
})

onMounted(getAllCategories)
onMounted(getAllPrices)

function handleUpdateProductForm() {
    UpdateProduct(params.id, products.value)
}




</script>