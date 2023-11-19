<template>
    <div class="mx-4">
        <h4 class="mb-3">Agregar Producto</h4>
        <form class="needs-validation" @submit.prevent="handleAddProductForm" id="AddProductForm">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">Nombre</label>
                    <input type="text" class="form-control" placeholder="" value="" required>
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Categoria</label>
                    <select class="form-control" placeholder="" required>
                        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}
                        </option>
                    </select>
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label>Descripción <span class="text-muted">(Optional)</span></label>
                <textarea class="form-control"></textarea>
                <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">Tipo de Precio</label>
                    <select class="form-control" placeholder="" required>
                        <option v-for="product in products" :options="product.price_type" :value="product.price_type" :key="product.price_type">{{ product.price_type_description}}
                        </option>
                    </select>
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Precio</label>
                    <input type="number" class="form-control" placeholder="" value="" required>
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
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

const {categories, getAllCategories} = useProducts();
const {products, getAllProducts} = useProducts();

onMounted(getAllCategories)
onMounted(getAllProducts)

const formData =({

});

const handleAddProductForm = async() =>{
    console.log("Formulario Enviado", formData)
}

</script>