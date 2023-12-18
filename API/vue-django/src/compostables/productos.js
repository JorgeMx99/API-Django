import axios from "axios"
import { ref } from "vue"
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


export default function useProducts() {
  const URL_PRODUCTS = 'http://127.0.0.1:8000/api/products/'
  const URL_CATEGORIES = 'http://127.0.0.1:8000/api/categories/'
  const URL_PRICES = 'http://127.0.0.1:8000/api/prices/'
  const products = ref([])
  const prices = ref([])
  const categories = ref([])
  const error = ref(null)
  const statusCode = ref(null)
  const delError = ref(null)


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
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      }
      

      const res = await axios(config)
      products.value = res.data
      toast('Producto Agregado Correctamente', {
        autoclose: 1000,
      });

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

  const UpdateProduct = async (id, data) => {
    products.value = [];
    error.value = null;
  
    try {
      const formData = new FormData();
  
      // Agregar campos de datos a FormData
      formData.append('name', data.name);
      formData.append('category', data.category);
      formData.append('description', data.description);
      formData.append('price_type', data.price_type);
      formData.append('price', data.price);
  
      // Verificar si se seleccionó una imagen
      if (data.image) {
        formData.append('image', data.image);
      }
  
      const config = {
        method: 'PUT',
        url: URL_PRODUCTS + id,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: formData,
      };
      console.log('Datos:', data)
      
      const res = await axios(config);
  
      products.value = res.data;
      statusCode.value = res.status;
  
      toast.success('Producto Actualizado Correctamente', {
        autoclose: 200,
      });
    } catch (err) {
      error.value = err;
    }
  };


  const deleteProduct = async (id) => {
    products.value = []
    error.value = null
    try {
      const config = {
        method: 'DELETE',
        url: URL_PRODUCTS + id,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const res = await axios(config)
      statusCode.value = res.status
      toast.info('Producto Eliminado Correctamente', {
        autoclose: 3000,
      });
    } catch (err) {
      delError.value = err
    }
  }


  return {
    getAllProducts,
    getAllPrices,
    getAllCategories,
    getSingleProduct,
    createProduct,
    UpdateProduct,
    deleteProduct,
    error,
    products,
    categories,
    prices,
    statusCode,




  }
}