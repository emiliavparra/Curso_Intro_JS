// Ejercicio 2: Cálculo de descuento por edad
// Solicita al usuario su edad y usa una función flecha para aplicar un descuento dependiendo de la 
// edad. Puedes tomar punto de partida los siguientes datos:
// 65 años = 15% de descuento
// Menor a 65 = No hay descuento

// 1. Importo la libreria para usar prompt.
// Uso let para declarar la variable donde se va a pedir la edad al usuario
// Uso prompt para que el programa le pida al usuario que ingrese su edad y parseInt para que 
// sea un entero
const prompt = require('prompt-sync')();

let edad = parseInt(prompt('ingrese su edad por favor: '))

// Hago la funcion flecha para definir el porcentaje de descuento segùn la edad
// Uso ? para no tener que escribir un 'if else'
const calcularDescuento = edad =>
    edad >= 65 ? 15 : 0;

// Creo una variable para mostrar el calculo del descuento en base a la edad y porcentaje
let descuento = calcularDescuento(edad)

// Imprimo el resultado
console.log(`Tienes ${edad} años, por lo cual recibes un descuento de ${descuento}`)

