const {
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
} = require('./suma');

// Sección 1

test('la suma de 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

// Sección 2

// a) toBe
test('10 + 10 debe ser igual a 20', () => {
    expect(sumarDiez()).toBe(20);
});

// b) toEqual
test('los objetos deben ser iguales', () => {
    expect(crearObjeto()).toEqual({
        nombre: "Juan",
        edad: 20
    });
});

// c) Valores nulos y definidos
test('debe ser null', () => {
    expect(valorNulo()).toBeNull();
});

test('debe ser undefined', () => {
    expect(valorUndefined()).toBeUndefined();
});

test('debe estar definido', () => {
    expect(valorDefinido()).toBeDefined();
});

// d) Comparaciones numéricas
test('15 es mayor que 10', () => {
    expect(numero()).toBeGreaterThan(10);
});

test('15 es menor que 20', () => {
    expect(numero()).toBeLessThan(20);
});

test('15 es mayor o igual que 15', () => {
    expect(numero()).toBeGreaterThanOrEqual(15);
});

// e) Expresiones regulares
test('la cadena contiene Jest', () => {
    expect(obtenerMensaje()).toMatch(/Jest/);
});

// f) Arrays
test('el array contiene pera', () => {
    expect(obtenerFrutas()).toContain("pera");
});

// g) Negación
test('50 no debe ser igual a 100', () => {
    expect(obtenerNumero()).not.toBe(100);
});

// h) Promesas
test('la promesa debe resolverse correctamente', async () => {
    await expect(promesaExitosa()).resolves.toBe("Promesa resuelta");
});

test('la promesa debe fallar correctamente', async () => {
    await expect(promesaFallida()).rejects.toBe("Promesa rechazada");
}); 