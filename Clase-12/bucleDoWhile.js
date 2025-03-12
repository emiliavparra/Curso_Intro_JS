//siuntaxis
// do {
// codigo a ejecutrar - aun cuando mi condicion es falsa el principio
// agregar contador
// } while (condicion);



let vuelta = 3
do {
    console.log('Dando la vuelta numero ' + vuelta);
    vuelta++ // se suma 1 a vuelta por lo tanto vuelta = 6
} while (vuelta <= 5); // al vuelta ser 6 la condicion retorna false y se termina el codigo

console.log('Fin de vuelta')

let intentos = 0
do {
    console.log('Intento nro: ' + intentos)
    intentos++;;
} while (intentos < 3)

console.log('Fin de los intentos')

// Generar nros aleatorios usando la funcion math random

let numero;
do {
    numero = Math.floor(Math.random() * 10);
    console.log('Numero generado: ', numero);
} while (numero !== 7);
console.log('Se encontro el nro 7!')