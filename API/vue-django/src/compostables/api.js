import axios from "axios";

export default function useApiRequests() {
  const handleApiRequest = async (url, targetArray) => {
    targetArray.value = [];
    try {
      const res = await axios(url);
      targetArray.value = res.data;
    } catch (err) {
      // Puedes personalizar el manejo de errores según tus necesidades
      console.error("Error al realizar la solicitud API:", err);
    }
  };

  return { handleApiRequest };
}