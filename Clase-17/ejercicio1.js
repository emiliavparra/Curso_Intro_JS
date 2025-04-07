// Ejercicio 1: Calculando la edad
// Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual 
// en la consola con la frase "Tienes X años" (siendo X la cantidad de años). 
// Por ejemplo, asumiendo que el año actual es 2025 y el usuario ingresa 1998, el programa debe
// imprimir en la consola: “Tienes 26 años”.


//1. Importo la libreria para usar prompt.
// Uso let para declarar la variable donde se va a pedir la edad al usuario
// Uso prompt para que el programa le pida al usuario que ingrese su edad
const prompt = require('prompt-sync')();

let nombre = prompt('Ingresa por favor tu edad actual: ')
// Imprimo el resultado en consola
console.log(`Tienes ${nombre} años`)
