// Ejercicio 7: Números Naturales
// Se ingresa por teclado un número natural de hasta 2 cifras, 
// si tiene una cifra que muestre lo que le falta para ser un número de 2 cifras; 
// de lo contrario, que muestre lo que le falta para ser un número de 3 cifras. 
// Considerar que el usuario ingresa números de hasta dos cifras.

// 1. Importo la libreria para usar prompt.

const prompt = require('prompt-sync')();

// Uso prompt para pedirle al usuario que ingrese un numero y parseInt para convertirlo a entero
const numeroNat = parseInt(prompt('Ingrese por favor un numero entero de maximo dos cifras: '))

if (numeroNat < 10) {
    console.log(`Ingresaste el numero ${numeroNat}. Te faltan ${10 - numeroNat} para tener 2 cifras`)
}
else if (numeroNat < 100) {
    console.log(`Ingresaste el numero ${numeroNat}. Te faltan ${100 - numeroNat} para tener 3 cifras`)
}