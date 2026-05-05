import express from 'express';
import "./conexion.js";
import Usuario from './models/usuario.model.js';


const app = express();
const puerto = 3000;

//  Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

//Ruta para crear usuario
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

//Handler para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// Handler para obtener consulta de un usuario.
app.get('/usuario/:id', async (req, res) => {
    try {
      const {id} = req.params; // Extrae el ID de los parámetros de la solicitud
      const usuario = await Usuario.findById(id); 
      res.status(200).json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});

// Actualizar un usuario
app.put('/usuario/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByIdAndUpdate(id, req.body);
      if(!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
        }
      const usuarioActualizado = await Usuario.findById(id);
      res.status(200).json(usuarioActualizado);
      console.log(usuarioActualizado);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario.
app.delete('/usuario/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByIdAndDelete(id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json({ mensaje: 'Usuario eliminado', usuario });
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

// Iniciar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});