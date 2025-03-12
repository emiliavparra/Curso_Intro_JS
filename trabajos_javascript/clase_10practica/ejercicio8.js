// Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta una 
// temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión es: 
// Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así: 
// let fahrenheit = celsius * 9 / 5 + 32; 
// let fahrenheit = ºC * 1,8 + 32;  - es lo mismo - (9/5 = 1.8)

// Primero importo la libreria de nodejs para usar prompt
const prompt = require('prompt-sync')();

// Usando prompt le pido al usuario que ingrese la temperatura
// Uso parseFloat ya que la temperatura puede ser un numero no decimal
let temperaturaUsuario = parseFloat(prompt('Ingrese la temperatura en Celsius: '))
// Imprimo el mensaje para que se vea la temperatura ingresada
console.log(`La temperatura en Celsius ingresada es ${temperaturaUsuario}`)

// Declaro una variable para convertir a Fahrenheit, usando el dato ingresado previamente
let temperaturaF = temperaturaUsuario * 9 / 5 + 32;
console.log(`La misma temperatura pero en Fahrenheit es ${temperaturaF}`)

