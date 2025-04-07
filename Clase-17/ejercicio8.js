// Ejercicio 8: Número N
// Hacer un programa que calcule la suma de los N primeros números naturales, 
// dónde N es el número límite ingresado por teclado.

// 1. Importo la libreria para usar prompt.

const prompt = require('prompt-sync')();

// Le pido al usuario que ingrese el numero limite
// Uso prompt para el ingreso por consola y parseInt para que se transforme a entero
const numeroLimite = parseInt(prompt('Ingresa un numero menor a 10: '))

// Creo una variable para guardar la suma
let n = 0

// Hago el ciclo para que itere hasta llegar al numero ingresado

for (let x = 1; x < numeroLimite; x++) {
    n += x; {
        console.log(`La suma de los numeros es ${n}`)
    }

}


// for (let encontrarPares = 1; encontrarPares <= 100; encontrarPares++) {
//     if (encontrarPares % 2 == 0) { //le digo que si es par se guarde
//         numerosPares.push(encontrarPares) //agrego el nro par a la array con push
//     }
// }