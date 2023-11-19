import axios from "axios"
import { ref } from "vue"

export default function useProducts() {
  const URL_PRODUCTS = 'http://127.0.0.1:8000/api/products/'
  const URL_CATEGORIES = 'http://127.0.0.1:8000/api/categories/'
  const products = ref([])
  const categories = ref([])
  const error = ref(null)

  const getAllProducts = async () => {
    products.value = []
    error.value = null
    try {
      const res = await axios(URL_PRODUCTS)
      products.value = res.data
    } catch (err) {
      error.value = err
    }
  }

  const getAllCategories = async () => {
    categories.value = []
    error.value = null
    try {
      const res = await axios(URL_CATEGORIES)
      categories.value = res.data
    } catch (err) {
      error.value = err
    }
  }

  //Crear Nuevo Producto 

  const createProduct = async (formData) => {
    products.value = []
    error.value = null
    try {
      const config = {
        method: 'POST',
        url: URL_PRODUCTS,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(formData)
      }
      const res = await axios(config)
      products.value = res.data
    } catch (err) {
      error.value = err

    }

  }

  return {
    getAllProducts,
    getAllCategories,
    createProduct,
    error,
    products,
    categories,

  }
}