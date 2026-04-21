// 1. Importa express y axios
import express from "express";
import axios from "axios";

// 2. Crea la aplicación de express y establece el número de puerto.
const app = express();
const PORT = 3000;

// 3. Usa la carpeta public para archivos estáticos.
app.use(express.static("public"));

app.set("view engine", "ejs");

// 4. Cuando el usuario vaya a la página de inicio, debería renderizar el archivo index.ejs.
// Usa axios para obtener la cita aleatoria y pásalo a index.ejs para mostrar
// la cita y el personaje que la dijo.
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;
        res.render('index', {
            
            quote,
            character
        });
        console.log(result.data);

        
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }
        res.render('index', {
            quote: 'No se puede obtener la cita',
            character: 'Error'
        })
    }
})

// 6. Escucha en el puerto predefinido y arranca el servidor.
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
