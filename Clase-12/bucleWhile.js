// EJECUTA REPETIDAS VECES HASTA QUE NO SEA TRUE

// while (condicion) {
//     // codigo que se ejecutara en cada repeticion
//     // hace algo para que la condicion eventualmente se deje de cumplir
// }

// EJEMPLO 1
let vuelta = 1
while (vuelta <= 5) {
    console.log('Dando la vuelta numero ' + vuelta);
    vuelta++ // al final de cada vuelta sumara 1 a la vuelta 
};

// Crear un programa que pida un numero y cuente hasta ese nro usando whikle
const prompt = require('prompt-sync')();

let numero = prompt('Ingresa un numero: ');
let contador = 1;

while (contador <= numero) {
    console.log(contador);
    contador++;
}
