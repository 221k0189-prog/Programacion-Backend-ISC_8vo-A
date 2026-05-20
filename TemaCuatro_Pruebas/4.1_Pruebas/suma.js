// Seccion 1
function suma(a, b) {
    return a + b;
}
module.exports = suma;

// Sección 2

// a) igualdad exacta
function sumarDiez() {
    return 10 + 10;
}

// b) comparación de objetos
function crearObjeto() {
    return {
        nombre: "Juan",
        edad: 20
    };
}

// c) valores nulos y definidos
function valorNulo() {
    return null;
}

function valorUndefined() {
    return undefined;
}

function valorDefinido() {
    return "Hola";
}

// d) comparaciones numéricas
function numero() {
    return 15;
}

// e) coincidencia de cadenas
function obtenerMensaje() {
    return "Bienvenido a Jest";
}

// f) contenido en arrays
function obtenerFrutas() {
    return ["manzana", "pera", "uva"];
}

// g) negación
function obtenerNumero() {
    return 50;
}

// h) promesas
function promesaExitosa() {
    return Promise.resolve("Promesa resuelta");
}

function promesaFallida() {
    return Promise.reject("Promesa rechazada");
}

module.exports = {
    suma,
    sumarDiez,
    crearObjeto,
    valorNulo,
    valorUndefined,
    valorDefinido,
    numero,
    obtenerMensaje,
    obtenerFrutas,
    obtenerNumero,
    promesaExitosa,
    promesaFallida
};