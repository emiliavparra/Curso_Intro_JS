// Ejercicio 5: Número secreto
// Escribí un programa que piense un número de forma aleatoria del 1 al 10 y 
// le pida al usuario que lo trate de adivinar. 
// Si el número es correcto debe imprimir en la consola “Felicitaciones, ¡ese era!", 
// de lo contrario, debe imprimir "Lo siento, ¡intenta nuevamente!"

// 1. Importo la libreria para usar prompt.

const prompt = require('prompt-sync')();


// Primero uso prompt para pedirle al usuario que ingrese un nro 
// Uso Parseint para que sea un nro entero

let adivinaNum = parseInt(prompt('Ingresa un numero del 1 al 10: '))

// Uso Math.random para que el programa piense un numero de forma aleatoria del 1 al 10
let numeroRandom = Math.floor(Math.random() * 10) + 1; // Hago asi para que sea entre 1 y 10

// Verifico usando if/else
if (numeroRandom === adivinaNum) {
    console.log('Felicitaciones! Haz encontrado el numero secreto')
}
else {
    console.log('Lo siento! Intenta nuevamente')
}

