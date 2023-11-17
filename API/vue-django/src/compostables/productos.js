const products = ref([])

onMounted(() => {
 
  axios.get('http://127.0.0.1:8000/api/products/')
    .then(response => {
      products.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})