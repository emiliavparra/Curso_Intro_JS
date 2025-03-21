// PROPIEDADES DE STRING
// Son características del string que nos dan información sobre él.

// length (Devuelve la cantidad de caracteres) / la longitud que tenga la palabra o la cadena de texto
let palabra = "Hola";
console.log(palabra.length); // 4

let cantidadLetras = "Hola Javascript";
console.log(cantidadLetras.length); // 15

// indexOf() (Encuentra la posición de un caracter o palabra)
let posicion = "Hola Mundo";
console.log(posicion.indexOf("Mundo")); // 5

let posicionPalabra = "Programar es divertido";
console.log(posicionPalabra.indexOf("divertido")); // 13

// METODOS DE STRING
// Son funciones asociadas a los strings que nos permiten manipularlos.

// slice() (Extrae o corta una parte de un string)
// Primer parametro: recibe el indice desde donde inicia
// Segundo parametro: recibe el indice donde tiene que hacer el corte - 
let saludo = "Hola Mundo";
console.log(saludo.slice(0, 4)); // "Hola"

// Si le pongo un solo parametro - toma el indice donde inicia y devuelve todo lo restante
let parteDe = "Javascript es genial";
console.log(parteDe.slice(11)); // "es genial"

// que pasa si el parametro es negativo❓
let serie = "Greys Anatomy";
console.log("si es negativo el parametro" + " " + serie.slice(-5)); // ??? Se los dejo para chequear😉

// trim() (Elimina espacios en blanco al inicio y al final)
let sinEspacios = "  Hola  ";
console.log(sinEspacios.trim()); // "Hola"

let mensaje = "  Bienvenido ";
console.log(mensaje.trim()); // "Bienvenido"

// replace() (Reemplaza un texto dentro del string)
let reemplazo = "Me gusta el café";
console.log(reemplazo.replace("café", "té")); // "Me gusta el té"

let texto = "Hola Juan";
console.log(texto.replace("an", "lieta")); // "Hola Julieta"

// split() (Divide un string en un array)
// Va a buscar lo que le hayamos puesto como parametro
// y cada vez que lo encuentre, lo que hay previo, lo devuelve como un elemento del array
let lista = "manzana,pera,banana";
console.log(lista.split(",")); // ["manzana", "pera", "banana"]

let frase = "Hola mundo, cómo estás";
console.log(frase.split(" ")); // ["Hola", "mundo,", "cómo", "estás"]

let pruebaSplit = "123-657-10234-234456";
console.log(pruebaSplit.split("4"));
