const fs = require('fs'); // Importa el módulo File System

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');
});

// Desafio 1.

fs.readFile('archivo.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log('Contenido del archivo:');
        console.log(data);
    });

    