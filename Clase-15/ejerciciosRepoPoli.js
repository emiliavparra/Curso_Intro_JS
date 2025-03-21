// # Ejercicios de Arrays y Strings en JavaScript

// ## 📌 Ejercicios de Arrays

// **1️⃣ Métodos básicos de Arrays**

// - Crea un array con 5 colores y usa .push() para agregar otro color.

let colores = ['violeta', 'naranja', 'rojo', 'verde', 'lila']
console.log(colores)
colores.push('amarillo', 'azul')
console.log(colores)

// - Usa .pop() para eliminar el último elemento del array.

colores.pop([-1])
console.log(colores)

// - Usa .unshift() para agregar un número al inicio de un array de números.

let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
numeros.unshift(0)
console.log(numeros)

// - Crea un array con nombres y usa .includes() para verificar si existe un nombre en la lista.

let nombres = ['Emilia', 'Ana', 'Juan', 'Rosa']
console.log(nombres.includes('Emilia'))


// - Crea un array con varios elementos y usa .indexOf() para encontrar la posición de un elemento
// específico.

let elementos = ['Emilia', 13, 'Azul', 22, 14, 'Viernes']
console.log(elementos.indexOf(13))

// - Usa .lastIndexOf() para encontrar la última aparición de un elemento en un array.
console.log(elementos.lastIndexOf('Azul'))

// - Concatena los elementos de un array en un solo string usando .join().
console.log(elementos.join())

// ## 📌 Ejercicios de Strings

// **2️⃣ Métodos y Propiedades de Strings**

// - Crea una variable con tu nombre y usa .length para ver cuántas letras tiene.
let miNombre = 'Emilia'
console.log(miNombre.length)

// - Escribe un mensaje y usa .indexOf() para encontrar la posición de una palabra dentro del
// mensaje.

let mensaje = 'Hoy es viernes y estoy muy contenta porque hay sol'
console.log(mensaje.indexOf('viernes'))

// - Escribe un texto con espacios antes y después y usa .trim() para eliminar los espacios.
let texto = ' Habia una vez un gatito muy bebe '
console.log(texto.trim())

// - Escribe una frase y usa .replace() para cambiar una palabra por otra.
let frase = 'No todo lo que brilla es oro'
console.log(frase.replace('oro', 'dinero'))

// - Crea una lista de frutas en un string y usa .split() para convertirlo en un array.
let frutas = ('banana, naranja, manzana, uva')
console.log(frutas.split(','))

// - Usa .slice() para extraer una parte de un string.
console.log(frutas.slice('1'))

// - Crea una frase y reemplaza una palabra con .replace(), luego convierte todo el texto en un
// array con .split().

let miFrase = 'A caballo regalado no se le miran los dientes'
console.log(miFrase.replace('caballo', 'burro'))
console.log(miFrase.split(''))
