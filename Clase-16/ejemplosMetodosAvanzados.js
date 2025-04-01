// 📌 PASAR FUNCIONES POR REFERENCIA O DEFINIRLAS DENTRO DEL MÉTODO
// Cuando el código es pequeño, podemos definir la función (callback) directamente dentro del método,
// escribiendo ahí la lógica que queremos ejecutar.
// 🔹 Sin embargo, en proyectos más grandes, donde la misma lógica se necesita en varios lugares,
// es mejor definir la función aparte y pasarla por referencia.
// Esto ayuda a estructurar mejor el código, mejorar la legibilidad y optimizar el rendimiento.

// map()
// Ejemplo 1
// callback definido dentro del metodo
const num = [1, 2, 3, 4, 5];
const masNum = [20, 23, 40]

const dobles = masNum.map(function (numero) {
  return numero * 2;
});
console.log(dobles); // [2, 4, 6, 8, 10]

// Ejemplo 2
// pasamos la funcion como referencia
const otrosNum = [1, 2, 3, 4, 5];

function duplicar(num) {
  return num * 2;
}

const esElDoble = otrosNum.map(duplicar);

console.log(esElDoble); // [2, 4, 6, 8, 10]

//filter()
// Ejemplo 1
const edades = [15, 5, 17, 25, 19, 30, 50];
const mayoresA18 = edades.filter((edad) => edad > 18);
console.log(mayoresA18); // [ 25, 19, 30, 50 ]

// Ejemplo 2
// pasamos la funcion como referencia
const listaDeNum = [1, 2, 3, 4, 5];

function esMenorA3(num) {
  return num < 3;
}

let menorA3 = listaDeNum.filter(esMenorA3);
console.log(menorA3);

// reduce()
//Ejemplo 1
let precios = [1000, 1500, 350, 5800];

let precioTotal = precios.reduce(function (acumulador, num) {
  return acumulador + num;
}, 0);

console.log(precioTotal) // 8650

// Ejemplo 2 - con un valor inicial distinto a 0
const masNumeros = [1, 2, 3, 4, 5];

let sumaTotal = masNumeros.reduce((acumulador, num) => acumulador + num, 10);
console.log(sumaTotal); // 25

// forEach()
// Ejercicio 1
const numeros = [2, 4, 5, 7, 9];
const duplicados = []; // Array donde guardamos los nuevos valores

numeros.forEach(function (num) {
  duplicados.push(num * 2);
});

console.log(duplicados); // [4, 8, 10, 14, 18]

// Ejemplo 2
const numbers = [1, 2, 3, 4, 5];

const mostrarContador = (arr) => {
  let contador = 0;

  arr.forEach(function (num) {
    if (num > 3) {
      contador++; // Incrementamos el contador
      console.log(contador);
    }
    return contador;
  });
};
mostrarContador(numbers);

// find()
const colores = ["rojo", "azul", "verde", "amarillo", "negro", "violeta"];

const xLargo = colores.find(function (color) {
  return color.length > 5;
});
const buscoXLargo = colores.find((color) => color.length > 5);

console.log(buscoXLargo); // amarillo

//  EJEMPLOS DE LAS PPT - METODO FIND()
// En este ejemplo - el callback busca por propiedad

// vinculamos el metodo al objeto - y ejecutamos el callback -
const myDog = perrosEncontrados.find(function (perro) {
  return perro.raza === "Beagle";
});
console.log(myDog); //   { raza: "Beagle", color: "blanco" }

// con la notacion objeto.propiedad -> vamos a consultar el valor
// en este ejemplo el elemento que vamos a recibir es un objeto - lo vamos a llamar "perro"
const perrosEncontrados = [
  { raza: "Beagle", color: "blanco" },
  { raza: "Chihuahua", color: "amarillo" },
  { raza: "Pug", color: "negro" },
];
function encuentraMiPerro(perro) {
  return perro.raza === "Chihuahua";
}
// en cada vuelta - el parametro (elemento) que recibe es un objeto literal
const miPerro = perrosEncontrados.find((objeto) => encuentraMiPerro(objeto));
//const miPerro = perrosEncontrados.find(elemento => elemento.raza === "Chihuahua")

console.log(miPerro); //   { raza: "Chihuahua", color: "amarillo" }

// En este ejemplo el callback - busca por indice
const posicionesReservadas = [
  { nombre: "Ana", edad: 24 }, // 0
  { nombre: "Beth", edad: 22 }, // 1
  { nombre: "Cara", edad: 25 }, // 2
  { nombre: "David", edad: 30 }, // 3
  { nombre: "Ethan", edad: 26 }, // 4
];

// El guion bajo (_) es una convención para indicar que un parámetro no será utilizado.
// El guion bajo (_) en nuestro ejemplo de la ppt estaria reemplazando al parametro persona
// Si lo ponemos nos estaria dando como error - porque esta siendo declarado pero no lo usamos
function encontrarPorIndice(_persona, indice) {
  return indice === 3;
}

const miPosicion = posicionesReservadas.find((persona, indice) =>
  encontrarPorIndice(persona, indice)
);

console.log(miPosicion); //   { nombre: "David", edad: 30 }
