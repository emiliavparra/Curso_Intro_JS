// Permiten generar una coleccion de datos ordenados
// Utilizamos corchetes [] y usamos comas , para separar sus elementos
// Poemos almacenar los datos que queramos, del tipo que queramos

let miArray = ['Star Wars', true, 23];

// Por lo general los datos que se guardan suelen ser del mismo tipo

let pelisFavs = ['Star Wars', 'Lotr', 'Alien'];

// Para acceder a un elemento puntual nomramos el array dentro de los corchetes
pelisFavs[2] // Aca accedemos a la pelicula Alien 

// Longitud del array = length (elementos que tengo dentro de mi array)
pelisFavs.length;
// devuelve 3, el nro de elementos de array

let frutas = ['manzana', 'banana', 'naranja']
console.log(frutas[0]);
console.log(frutas.length)

let nombres = ['Ana', 'Luis', 'Carlos', 'Miriam', 'Juan']

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}