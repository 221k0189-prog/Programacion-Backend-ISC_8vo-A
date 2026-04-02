
import axios from "axios";

const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post(
      'https://reqres.in/api/register',
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
      {
        headers: {
          'x-api-key': 'pro_b72f7b5e7d5b19dc2689cedd74e3b5db4df49a0b1a33a281212c9b72f34fd199'
        }
      }
    );

    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {
    console.error('Error en el registro:', error.response.data);
  }
};

registrarUsuario();
