import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Productos from '../views/ListadoView.vue'
import Create from '../views/CreateProduct.vue'
import View from '../views/ViewProduct.vue'
import Edit from '../views/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/productos',
    name: 'productos',
    component:Productos
  },
  {
    path: '/create-product',
    name: 'create-product',
   component:Create
  },

  {
    path: '/view/:id',
    name: 'view',
    component:View
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component:Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:routes
})

export default router
