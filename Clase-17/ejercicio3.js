// Ejercicio 3: Conversor de monedas
// Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa una función flecha 
// para convertir el monto a pesos.

// 1. Importo la libreria para usar prompt.

const prompt = require('prompt-sync')();

// Uso let para declarar la variable donde se va a pedir la info
// Uso prompt para que el programa le pida al usuario que ingrese el monto en dolares y 
// parseInt para que sea un entero
let montoDolares = parseFloat(prompt('Ingresa el monto en dolares que desea cambiar: '))

// Hago otra variable para la tasa de cambio a pesos
let tasaCambioPesos = parseFloat(prompt('Ingrese el tc del dia de hoy: '))

// Hago la funcion que voy a usar para calcular lo pedido
const conversorMoneda = (a, b) => {
    return a * b
}

// Creo la variable final para calcular lo pedido con const para que no pueda editarse
const tuCambio = conversorMoneda(montoDolares, tasaCambioPesos)

// Muestro el resultado en consola 
console.log(`Tus ${montoDolares} a tc ${tasaCambioPesos} se convirtieron en 
    ${tuCambio} pesos. Disfrutalos! `)