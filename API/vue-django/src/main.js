import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToastPlugin from 'vue-toast-notification';


createApp(App).use(store).use(ToastPlugin).use(router).mount('#app')
