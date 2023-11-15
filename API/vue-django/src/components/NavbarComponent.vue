<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">API</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search" @submit.prevent="submitForm">
                    <input class="form-control me-2" type="search" placeholder="Busqueda de productos" aria-label="Search"
                        v-model="searchText">
                    <button class="btn btn-outline-success" type="submit" @click="getSearch">Buscar</button>
                </form>
            </div>
        </div>
    </nav>
</template>


<script setup>
import { ref } from 'vue';

const searchText = ref('')

const getSearch = () => {
    console.log(searchText.value)

}
</script>