// Ejercicios de Métodos de Arrays en JavaScript

// ## 1. Método `map()`

// ### Ejercicio 1: Duplicar valores
// Crear un nuevo array con el doble de los valores del array original.

//1. Lo primero que hago es crear un Array original:
const original = [1, 2, 3, 4];
//2. Creo la funcion que voy a usar en el call back
function duplicar(num) {
    return num * 2;
}
// 3. Uso la funcion para obtener la informacion que ira en el nuevo array 
const duplicadoOriginal = original.map(duplicar);
//4. Pido una impresion en la consola para ver el resultado
console.log(duplicadoOriginal)


// ### Ejercicio 2: Convertir nombres a mayúsculas
// Usa `map()` pasando una función por referencia para transformar un array de nombres en mayúsculas.
// 💡 Ayudín: En la clase 15 hay una tabla con metodos y propiedades de string. Fijate cual tenes que usar para convertir un string a mayúscula😉

//1. Creo el array con los nombres que se convertiran a mayusculas
const nombres = ['Emilia', 'Dario', 'Juan', 'Oscar', 'Susana']
//2. Creo que la funcion para obtener el resultado pedido 
function mayuscula(nombre) {
    return nombre.toUpperCase();
}
//3. Creo el array donde se guardara el array en mayuscula
const nombresMayuscula = nombres.map(mayuscula)
//4. Imprimo en consola para ver el resultado
console.log(nombresMayuscula)

// ## 2. Método `filter()`
// ### Ejercicio 3: Filtrar números pares
// Usa `filter()` para obtener solo los números pares de un array.

//1. Creo el array de numeros que voy a filtrar
const numbers = [2, 5, 8, 9, 11, 23, 68, 79, 185]
//2. Creo la funcion que voy a llamar para filtrar los numeros pares
const numbersPar = numbers.filter((num) => num % 2 == 0)
//3. imprimo el resultado
console.log(numbersPar)


// ### Ejercicio 4: Filtrar palabras con más de 5 letras
// Usa `filter()` para obtener solo las palabras con más de 5 letras. Usá una funcion flecha 
// y pasala como referencia.

//1. Creo el array que voy a usar
const palabras = ['Gato', 'Lunes', 'Milanesa', 'Telescopio', 'Perro', 'Nube', 'Miercoles']
//2. uso filter en una funcion flecha
const palabrasCinco = palabras.filter((word) => word.length > 5)
//3. Imprimo el resultado
console.log(palabrasCinco)


// ## 3. Método `reduce()` (Acumulador y Elemento Actual)
// ### Ejercicio 5: Sumar valores de un array
// Usa `reduce()` para obtener la suma total de un array de números.

//1. Creo el array que voy a usar para el ejercicio
const valores = [1, 3, 5, 8, 10]
//2. Creo la funcion con acumulador
const sumaTotal = valores.reduce(function (acumulador, num) {
    return acumulador + num
})
//3. Imprimo el resultado
console.log(sumaTotal)

// ### Ejercicio 6: Multiplicar valores de un array
// Usa `reduce()` con una función por referencia para multiplicar todos los valores de un array.

//1. Creo la array que voy a usar de ejemplo
const valoresArray = [2, 8, 3]
//2. Uso reduce en una funcion para ver lo pedido
const multiplicarValoresArray = valoresArray.reduce(function (acumulador, num) {
    return acumulador * num
})
//3. Imprimo el resultado
console.log(multiplicarValoresArray)

// ## 4. Método `find()`
// ### Ejercicio 7: Encontrar un número mayor a 10
// Usa `find()` para encontrar el primer número mayor a 10 dentro del array.

//1. Creo el array que voy a usar en el ejercicio
const mayor = [3, 13, 56, 2, 45, 78, 4]
//2. Creo la funcion que me ayudara a resolverlo
const mayorDiez = mayor.find(function (x) {
    return x > 10
})
//3. Imprimo el resultado
console.log(mayorDiez)

// ### Ejercicio 8: Buscar un usuario por nombre
// Usa `find()` pasando una función declarada para encontrar un usuario dentro de un array de objetos.

//1. Creo el array que voy a usar
const usuarios = ['Casa', 'Gonzalo', 'Pajaro', 'Linda', 'Carlos', 'Caramelo']
//2. Creo la funcion declarada usando find
const encontrarUsuario = usuarios.find(function (name) {
    return name === 'Linda'
})
//3. Imprimo el resultado
console.log(encontrarUsuario)

// ## 5. Método `forEach()`
// ### Ejercicio 9: Mostrar en la terminal cada elemento de un array
// Usa `forEach()` para recorrer un array y mostrar en la consola los elementos.

//1. Creo el array que voy a mostrar
const receta = ['sal', 'aceite', 'harina', 'azucar']
// Creo la array donde voy a guardar los nuevos valores
const elementosReceta = []
//Uso el metodo pedido
receta.forEach(function (cosas) {
    console.log(cosas)
})

// ---
// ### Ejercicio 10: Modificar valores dentro de un array vacío
// Usa `forEach()` para llenar un nuevo array con valores al cuadrado.

//1. Creo el array que voy a usar de ej
const ejemploNums = [1, 5, 3, 36, 80]
// Creo el array donde voy a guardar el resultado
const nuevoEjemploNums = []

ejemploNums.forEach(function (y) {
    nuevoEjemploNums.push(y * 2)
});
//3. Imprimo el resultado
console.log(nuevoEjemploNums)



// 💡 Ayudín: Para calcular el cuadrado de un número en JavaScript, existen distintas maneras. Pueden investigar cómo hacerlo utilizando operadores aritméticos o explorando métodos nativos de JavaScript para trabajar con números.
// Prueben dos formas distintas de resolver el ejercicio.
