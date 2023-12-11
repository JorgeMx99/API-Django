<template>
  <NavbarComponent @getSearchText="search" />


    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Tienda</h1>
          <p class="lead text-body-secondary">Something short and leading about the collection below—its contents, the
            creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        </div>
      </div>
    </section>

    <div class="album py-3 bg-body-tertiary">

      <div class="container">
        <div class="" v-if="$route.path == '/'">
          <button type="button" class="btn btn-outline-success ms-2" v-for="category in categories" :key="category.id"
            @click="getCategory(category.id, category.name)">{{
              category.name }} </button>

        </div>

        <div class="py-3" v-if="categoryRecivied">
          <div class="py-3">
            <h3>Productos de la Categoria: {{ categoryRecivied }}</h3>
            <button type="button" class="btn btn-outline-warning ms-2" @click="resetfilter">Todas las categorias</button>
          </div>

          <div class="alert alert-warning p-2" role="alert" v-if="filteredProducts.length === 0">
            Lamentablemente no hay productos de la categoria <strong>{{ categoryRecivied }}</strong>
          </div>
        </div>

        <div class="py-3" v-if="searchTextRule">
          <div class="py-3">
            <h3>Productos con las palabras: {{ searchTextRule }}</h3>
            <button type="button" class="btn btn-outline-warning ms-2" @click="resetfilter">Todas las categorias</button>
          </div>

          <div class="alert alert-warning p-2" role="alert" v-if="filteredProducts.length === 0">
            Lamentablemente no hay productos de:  <strong>{{ searchTextRule }}</strong>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 py-2" v-for="product in filteredProducts" :key="product.id">
            <div class="card mb-4">
              <img class="bd-placeholder-img card-img-top" :src="product.image" width="100%" height="225">
              <div class="card-body">
                <h5>{{ product.name }}</h5>
                <p class="card-title text-info">{{ product.category_name }}</p>
                <hr>
                <small class="card-text">{{ product.description }}</small>

              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <small class="text-muted">{{ product.price_type_description }}</small>
                </div>
                <small class="text-muted">${{ product.price }}</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script setup>

import axios from 'axios'
import { ref, defineEmits, onMounted } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue';



const products = ref([])
const categoryRecivied = ref(null)
const filteredProducts = ref([])
const categories = ref([])
const searchTextRule = ref(null)


const search = (searchText) => {
  searchTextRule.value = searchText
  categoryRecivied.value = null
  if (searchText) {
    filteredProducts.value = products.value.filter((product) => {
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      const searchTerm = searchText.toLowerCase();
      return (
        productName.includes(searchTerm) ||
        productDescription.includes(searchTerm)

      )
    })
  } else {
    filteredProducts.value = products.value
  }
}



const resetfilter = () => {
  categoryRecivied.value = null
  filteredProducts.value = products.value
  searchTextRule.value = null
}

const emit = defineEmits(['getCategoryID'])

const getCategory = (id, name,) => {
  emit('getCategoryID', id, name)
  searchTextRule.value = null
  categoryRecivied.value = name
  if (id) {
    filteredProducts.value = products.value.filter((product) => product.category === id)
  } else {
    filteredProducts.value = products.value
  }
}


onMounted(() => {
  axios.get('http://127.0.0.1:8000/api/categories/')
    .then(response => {
      categories.value = response.data

    })
    .catch(error => {
      console.log(error)
    })

  axios.get('http://127.0.0.1:8000/api/products/')
    .then(response => {
      products.value = response.data
      filteredProducts.value = products.value
    })
    .catch(error => {
      console.log(error)
    })
})



</script>

<style></style>
