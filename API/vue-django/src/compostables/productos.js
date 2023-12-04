import axios from "axios"
import { ref } from "vue"

export default function useProducts() {
  const URL_PRODUCTS = 'http://127.0.0.1:8000/api/products/'
  const URL_CATEGORIES = 'http://127.0.0.1:8000/api/categories/'
  const URL_PRICES = 'http://127.0.0.1:8000/api/prices/'
  const products = ref([])
  const prices = ref([])
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

  const getAllPrices = async () => {
    prices.value = []
    error.value = null
    try {
      const res = await axios(URL_PRICES)
      prices.value = res.data
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
      window.location.href = 'productos'
    } catch (err) {
      error.value = err

    }
  }

  //Obtener solo un ID

  const getSingleProduct = async (id) => {
    products.value = []
    error.value = null
    try {
      const res = await axios(URL_PRODUCTS + id)
      products.value = res.data
    } catch (err) {
      error.value = err

    }

  }

  const UpdateProduct = async (id,data) => {
    products.value = []
    error.value = null
    try {
      const config = {
        method: 'PUT',
        url: URL_PRODUCTS + id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      }
      const res = await axios(config)
      products.value = res.data
      window.location.href = 'productos'
    } catch (err) {
      error.value = err

    }

  }


  return {
    getAllProducts,
    getAllPrices,
    getAllCategories,
    getSingleProduct,
    createProduct,
    UpdateProduct,
    error,
    products,
    categories,
    prices,


  }
}