// Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio final 
// de un producto después de aplicar un descuento. 
// Pide al usuario que ingrese el precio original y el porcentaje de descuento, 
// y muestra el precio final.
// Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así:

// let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// Primero importo la libreria de nodejs para usar prompt
const prompt = require('prompt-sync')();

// Segundo hago una variable para que el usuario ingrese el precio original
let precioOriginal = parseFloat(prompt('Ingrese el precio original: '))

// Tercero hago una variable para que el usuario ingrese el porcentaje de descuento
let porcentajeDescuento = parseFloat(prompt('Ingrese el porcentaje de descuento: '))

// Hago una para calcular el monto del descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100)

// Hago una variable que calcule el precio final
const precioFinal = precioOriginal - montoDescuento

// Imprimo el resultado en consola
console.log(`El precio ingresado es ${precioOriginal} y el descuento a aplicar ${porcentajeDescuento}
El precio final a abonar es ${precioFinal}`)