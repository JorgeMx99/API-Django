<template>
    <div class="mx-4">
        <h4 class="mb-3">Agregar Producto</h4>
        <form class="needs-validation" @submit.prevent="handleAddProductForm" id="AddProductForm">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label>Nombre</label>
                    <input v-model.trim="formData.name" id="name" type="text" class="form-control" placeholder="" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label>Categoria</label>
                    <select v-model.trim="formData.category" id="category" class="form-control" placeholder="" required>
                        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="mb-3">
                <label>Descripción <span class="text-muted">(Optional)</span></label>
                <textarea v-model.trim="formData.description" id="description" class="form-control"></textarea>
            </div>

            <div class="row">
                <div class="col-md-4 mb-3">
                    <label>Tipo de Precio</label>
                    <select v-model.trim="formData.price_type" class="form-control" placeholder="">
                        <option v-for="price in prices" :value="price.id" :key="price.id">{{ price.name }}
                        </option>
                    </select>
                </div>
                <div class="col-md-4 mb-3">
                    <label>Precio</label>
                    <input v-model.trim="formData.price" id="price" type="number" class="form-control" placeholder=""
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
import { onMounted, reactive } from 'vue';


const { categories, getAllCategories } = useProducts();
const { prices, getAllPrices } = useProducts();



onMounted(getAllCategories)
onMounted(getAllPrices)


const { createProduct } = useProducts();


const formData = reactive({
    name: "",
    category: [],
    description: "",
    price_type: [],

});

const handleAddProductForm = async () => {
    await createProduct(formData)
   
}




</script>