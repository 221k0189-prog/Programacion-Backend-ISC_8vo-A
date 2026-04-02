import axios from "axios";

const obtenerUsuario = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        'Authorization': 'Basic ' + Buffer.from('usuario_malo:123456').toString('base64'),
        'x-api-key': 'pro_b72f7b5e7d5b19dc2689cedd74e3b5db4df49a0b1a33a281212c9b72f34fd199'
      }
    });
    console.log('Datos del usuario:', response.data);
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error.response.data);
  } 
};

obtenerUsuario();
