<template>
  <main>

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
            @click="getCategoryID(category.id, category.name)">{{
              category.name }}</button>
        </div>

        <div class="py-3" v-if="categoryRecivied">
          <h3>Productos de la Categoria: {{ categoryRecivied }}</h3>
          <button type="button" class="btn btn-outline-warning ms-2" @click="resetfilter">Todas las categorias</button>
        </div>
        
        <div class="alert alert-warning p-2" role="alert" v-if="filteredProducts.length === 0">
          Lamentablemente no hay productos de la categoria {{ categoryRecivied }}
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

  </main>
</template>

<script>

import axios from 'axios'
export default {
  name: 'HomeView',

  data() {
    return {
      categories: [],
      products: [],
      categoryRecivied: null,
      categoryID: null,
      categoryName: null,
      filteredProducts: [],
    }
  },

  methods: {
    getCategoryID(categoryID, categoryName) {
      this.$emit('getCategoryID', categoryID, categoryName)
      this.categoryRecivied = categoryName
      if (categoryID) {
        this.filteredProducts = this.allProducts.filter((product) => product.category === categoryID)
      } else {
        this.filteredProducts = this.allProducts
      }

    },

    resetfilter() {

      this.categoryRecivied = null
      this.filteredProducts = this.allProducts
    }

  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => {
        this.categories = response.data

      })
      .catch(error => {
        console.log(error)
      })

    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        this.allProducts = response.data
        this.filteredProducts = this.allProducts
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
