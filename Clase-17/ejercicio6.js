// Ejercicio 6: Numero pares
// Escribí un programa que imprima los números pares del 0 al 100. 
// No es necesario pedirle al usuario, solo imprimir el resultado. 
// Agreguen los números pares a un array.
// Pista: Usa un ciclo

// Creo ubna array donde se van a agregar los nros pares
const numerosPares = [];

//Hago el ciclo con una funcion flecha
for (let encontrarPares = 1; encontrarPares <= 100; encontrarPares++) {
    if (encontrarPares % 2 == 0) { //le digo que si es par se guarde
        numerosPares.push(encontrarPares) //agrego el nro par a la array con push
    }
}

//imprimo el resultado
console.log(numerosPares)

