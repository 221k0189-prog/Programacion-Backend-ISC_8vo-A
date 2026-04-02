import axios from "axios";

const tokenInvalido = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer token_falso_12345"
      }
    });

    console.log("Respuesta correcta:", response.data);
  } catch (error) {
    console.log("Error de Respuesta:", error.response.data);
  }
};

tokenInvalido();