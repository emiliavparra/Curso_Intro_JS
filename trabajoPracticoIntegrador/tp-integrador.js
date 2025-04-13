// Sistema de gestion de biblioteca

// Punto 1. Estructura de datos 
// a)	Crear un array de objetos llamado libros que contenga al menos 10 libros. 
// Cada libro debe tener las siguientes propiedades: 
// ✔	id (número)
// ✔	título (string), 
// ✔	autor (string), 
// ✔	año (número), 
// ✔	género (string), 
// ✔	disponible (booleano).

// b)	Crear un array de objetos llamado usuarios con al menos 5 usuarios. 
// Cada usuario debe tener:
// ✔	id (número)
// ✔	nombre (string)
// ✔	email (string)
// ✔	librosPrestados (array de ids de libros).

// a. Creo la array de libros. Uso 'const' para que no se pueda reutilizar 'libros' o ser reemplazada
// uso comillas para los string

const libros = [
    {
        id: 1,
        titulo: 'Libro uno',
        autor: 'Dario Gomez',
        año: 2010,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 2,
        titulo: 'Libro dos',
        autor: 'Dario Gomez dos',
        año: 2001,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 3,
        titulo: 'Libro tres',
        autor: 'Dario Gomez tres',
        año: 2002,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 4,
        titulo: 'Libro cuatro',
        autor: 'Dario Gomez cuatro',
        año: 2023,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 5,
        titulo: 'Libro cinco',
        autor: 'Dario Gomez cinco',
        año: 2004,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 6,
        titulo: 'Libro seis',
        autor: 'Dario Gomez seis',
        año: 2005,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 7,
        titulo: 'Libro siete',
        autor: 'Dario Gomez siete',
        año: 2006,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 8,
        titulo: 'Libro ocho',
        autor: 'Dario Gomez ocho',
        año: 2007,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 9,
        titulo: 'Libro nueve',
        autor: 'Dario Gomez nueve',
        año: 2008,
        genero: 'Fantasia',
        disponible: true
    },
    {
        id: 10,
        titulo: 'Libro diez',
        autor: 'Dario Gomez diez',
        año: 2009,
        genero: 'Fantasia',
        disponible: true
    }
]

// b.
// Creo la array de usuarios. Uso 'const' para que no se pueda reutilizar 'usuarios' o ser reemplazada
// uso comillas para los string
const usuarios = [
    {
        id: 1,
        nombre: 'Emilia Parra',
        email: 'emiliapa@hotmail.com',
        librosPrestados: []
    },
    {
        id: 2,
        nombre: 'Emilia Parra dos',
        email: 'emiliapa2@hotmail.com',
        librosPrestados: []
    },
    {
        id: 3,
        nombre: 'Emilia Parra tres',
        email: 'emiliapa3@hotmail.com',
        librosPrestados: []
    },
    {
        id: 4,
        nombre: 'Emilia Parra cuatro',
        email: 'emiliapa4@hotmail.com',
        librosPrestados: []
    },
    {
        id: 5,
        nombre: 'Emilia Parra cinco',
        email: 'emiliapa5@hotmail.com',
        librosPrestados: []
    }
]

// 2. Funciones de Gestión de Libros
// a)	Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo 
// libro al array libros.

// b)	Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o
//  género utilizando el algoritmo de búsqueda lineal. 

// c)	Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año 
// utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros 
// ordenados en la consola.

// d)	Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 

//a. Hago la funcion declarada de agregar libro con los datos necesarios
// Utilizo push para agregar el nuevo libro al array de libros

function agregarLibro(id, titulo, autor, anio, genero) {
    const nuevoLibro = {
        id,
        titulo,
        autor,
        año: anio,
        genero,
        disponible: true
    }

    libros.push(nuevoLibro)
}

//b. Hago la funcion buscar libro
// Uso una funcion flecha y el metodo 'filter' para encontrar lo que busco
// Agrego un return si encuentra un resultado y un return 'false' por si no està

function buscarLibro(criterio, valor) {
    const libroBuscado = libros.filter(libro => {
        if (criterio in libro) {
            return libro[criterio] === valor;
        }
        return false
    });

    return libroBuscado
}

// Pruebo el codigo en consola 
// console.log(buscarLibro('autor', 'Dario Gomez dos'))


//c. Defino la funcion para ordenar libros segun el criterio (titulo o año)
function ordenarLibros(criterio) {
    const librosOrdenados = [...libros]; //Hago una copia para no modificar la original
    const cantidadLibros = librosOrdenados.length; //Aca guardo la cantidad de libros para ordenar luego


    // Ahora uso el doble bucle que se usa en bubble sort
    for (let i = 0; i < cantidadLibros - 1; i++) {
        for (let j = 0; j < cantidadLibros - 1 - i; j++) {
            const a = librosOrdenados[j][criterio];
            const b = librosOrdenados[j + 1][criterio];
            // Hago un rechequeo de que lo comparado sea string
            if (typeof a === 'string' && typeof b === 'string') {
                if (a > b) {
                    [librosOrdenados[j], librosOrdenados[j + 1]] = [librosOrdenados[j + 1], librosOrdenados[j]];
                }
            } else if (a > b) {
                [librosOrdenados[j], librosOrdenados[j + 1]] = [librosOrdenados[j + 1], librosOrdenados[j]];
            }
        }
    }
    // que retorne siempre los libros ordenados
    return librosOrdenados;
}

//d. Defino la funcion para eliminar el libro segun id
// Uso findIndex para buscar en cada uno y que me retorne el que cumpla la condicion id
function borrarLibro(id) {
    const index = libros.findIndex(libro => libro.id === id);

    // Hago un if para que me de un mensaje por consola si esta o si no esta
    if (index !== -1) {
        libros.splice(index, 1);
        console.log(`El libro con id ${id} eliminado`)
    } else {
        console.log(`No se encontro ningun libro con el id ${id}`)
    }
}
