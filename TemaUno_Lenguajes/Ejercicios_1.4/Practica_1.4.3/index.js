import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

// Middleware para procesar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta principal: sirve el formulario
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ruta para procesar el formulario
app.post("/submit", (req, res) => {
  console.log(req.body); // Muestra los datos en consola
  res.send("Datos recibidos: " + JSON.stringify(req.body));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
