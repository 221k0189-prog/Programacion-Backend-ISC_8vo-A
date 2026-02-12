// Ejercicio 1.2.1 Sintaxis basica de Node.js
// Alumno: [Angel Jesus Balam Dzidz] 

// a) Comentarios
// Comentario en línea

console.log("Ejecutando el Ejercicio a...");
let estado = "Completado";
console.log("El resultado del inciso a es:", estado);

// b) Tipos de datos
console.log("\n--- Ejercicio b: Tipos de datos ---");

let nombre = "Balam";
let edad = 20;
let activo = true;
let vacio = null;
let indefinido;

console.log(nombre, edad, activo, vacio, indefinido);

// c) Array mixto
console.log("\n--- Ejercicio c: Array mixto ---");

let datos = ["Hola", 100, false, null, { curso: "Node" }];
console.log(datos);

// d) Polinomio segundo grado
console.log("\n--- Ejercicio d: Polinomio ---");

function polinomio(x, y) {
  console.log(x * x + 2 * x * y + y * y);
}
polinomio(2, 3);

// e) Función flecha string
console.log("\n--- Ejercicio e: String en mayúsculas ---");

const textoMayus = (txt) => console.log(txt.toUpperCase());
textoMayus("node js");

// f) Bucle descendente
console.log("\n--- Ejercicio f: Bucle descendente ---");

for (let i = 10; i >= 1; i--) console.log(i);

// g) Objeto institución
console.log("\n--- Ejercicio g: Objeto institución ---");

let institucion = {
  nombre: "ITM",
  ciudad: "Mérida",
  carrera: "Sistemas"
};

console.log(institucion);

// h) Método en el objeto institución
console.log("\n--- Ejercicio h: Método descripción ---");

institucion.descripcion = function () {
  console.log(`Institución: ${this.nombre} en ${this.ciudad}`);
};

institucion.descripcion();

// i) Funciones matemáticas
console.log("\n--- Ejercicio i: Operaciones matemáticas ---");

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

console.log("Suma:", suma(5, 2));
console.log("Resta:", resta(10, 3));
console.log("Multiplicación:", multiplicacion(4, 2));
console.log("División:", division(20, 5));

// j) Operación asincrónica con callback
console.log("\n--- Ejercicio j: Operación asincrónica ---");

function operacionAsincrona(callback) {
  setTimeout(() => {
    let resultado = "Operación completada";
    callback(resultado);
  }, 2000);
}

operacionAsincrona((respuesta) => {
  console.log("Resultado:", respuesta);
});


// k) Convertir cadena a número
console.log("\n--- Ejercicio k: Conversión con error ---");

function convertir(valor) {
  try {
    let n = Number(valor);
    if (isNaN(n)) throw "No es número";
    console.log("Número:", n);
  } catch (e) {
    console.log("Error:", e);
  }
}

convertir("10");
convertir("abc");
