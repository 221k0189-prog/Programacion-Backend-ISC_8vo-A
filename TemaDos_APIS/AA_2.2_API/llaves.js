import axios from "axios";

const obtenerClima = async () => {
  try {

    const apiKey = "6ff02a26e54774a998de8680d1158817";
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=${apiKey}`);


    console.log('Clima en cancun:', response.data);
  } catch (error) {
    console.error('Error al obtener los datos del clima:', error.response.data);
  } 
};

obtenerClima();