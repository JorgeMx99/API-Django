import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


createApp(App).use(store).use(Vue3Toasity,
    {
      autoClose: 3000,
      // ...
    }
  ).use(router).mount('#app')
