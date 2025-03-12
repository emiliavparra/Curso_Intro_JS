// Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa 
// Corporal (IMC). El IMC se calcula con la fórmula: 
// Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así:
// let imc = peso / (altura * altura);

// Primero importo la libreria de nodejs para usar prompt
const prompt = require('prompt-sync')();

// Segundo hago una variable para que el usuario ingrese su peso
let peso = parseFloat(prompt('Ingrese su peso: '))

// Tercero hago una variable para que el usuario ingrese su altura
let altura = parseFloat(prompt('Ingrese su altura: '))

// Hago una variable para calcular el IMC
let imc = peso / (altura * altura);
// Imprimo el resultado en consola
console.log(`Se ingreso peso ${peso} y altura ${altura}. Su IMC es de ${imc}`)