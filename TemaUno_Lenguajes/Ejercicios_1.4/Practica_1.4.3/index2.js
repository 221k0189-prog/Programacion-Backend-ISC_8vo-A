import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

const app = express();
const port = 3000;

var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, next){// crear tu propio middlewere
  if(req.body && req.body.adjetivo && req.body.mascota){
    console.log( req.body);//muestra los dos enviados por el usuario
    nombreEquipo = req.body.adjetivo + " " + req.body.mascota;// concatena los datos enviados por el usuario
    console.log("Nombre del equipo:", nombreEquipo);
  }
  next();// llama a la siguiente funcion en la pila de middleware
}

app.use(registrador);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=>{
  console.log(req.body);
  res.send(`El nombre del equipo es: ${nombreEquipo}`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});