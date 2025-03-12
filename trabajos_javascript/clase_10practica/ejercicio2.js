// ●	Ejercicio 2 – Usando las variables: 
// Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, 
// y luego muestre un mensaje personalizado que incluya toda esta información.


// Desglosando el ejercicio deberás:
// 1.	Pide al usuario que ingrese su nombre.
// 2.	Pide al usuario que ingrese su edad.
// 3.	Pide al usuario que ingrese su peso.
// 4.	Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
// Pista: En el ejercicio anterior, declaramos valores en las variables. 
// Ahora nos toca pedir datos al usuario, por lo que usaremos prompt para solicitar esta información

// 1. Utilizo la variable 'let' para definir la variable nombre
// Utilizo prompt para que se muestre el mensaje en consola y el usuario ingrese su nombre
let nombre = prompt('Ingrese su nombre: ')

//2.Utilizo la variable 'let' para definir la variable edad
//Utilizo prompt para que se muestre el mensaje en consola y el usuario ingrese su nombre 
//Utilizo parseint para que la rta del usuario se ocnvierta en un entero
let edad = parseInt(prompt('Ingrese su edad: '))

//3.Utilizo la variable 'let' para definir la variable peso
//Utilizo prompt para que se muestre el mensaje en consola y el usuario ingrese su nombre 
//Utilizo parseint para que la rta del usuario se connvierta en un entero
let peso = parseInt(prompt('Ingrese su peso: '))

// 4. Uso console log para mostrar un mensaje por consola incluyendo las variables
// uso la opcion de backtick

console.log(`Hola ${nombre}!. Segun lo ingresado tu edad es ${edad} y tu peso ${peso}`)


