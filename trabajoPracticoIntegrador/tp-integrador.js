// Sistema de gestion de biblioteca

// Punto 1
// Estructura de datos 
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
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        genero: "Ciencia ficcion",
        disponible: true
    },
    {
        id: 2,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico",
        disponible: true
    },
    {
        id: 3,
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        año: 1960,
        genero: "Ficción social",
        disponible: true
    },
    {
        id: 4,
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: 1925,
        genero: "Ficción",
        disponible: true
    },
    {
        id: 5,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        genero: "Romance",
        disponible: true
    },
    {
        id: 6,
        titulo: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        año: 1866,
        genero: "Drama psicológico",
        disponible: true
    },
    {
        id: 7,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        año: 1605,
        genero: "Aventura",
        disponible: true
    },
    {
        id: 8,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        año: 1953,
        genero: "Ciencia ficcion",
        disponible: true
    },
    {
        id: 9,
        titulo: "La Odisea",
        autor: "Homero",
        año: -800,
        genero: "Épica",
        disponible: true
    },
    {
        id: 10,
        titulo: "Drácula",
        autor: "Bram Stoker",
        año: 1897,
        genero: "Terror",
        disponible: true
    }
];

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
        nombre: 'Tomás Ríos',
        email: 'tomasrios@gmail.com',
        librosPrestados: []
    },
    {
        id: 3,
        nombre: 'Lucía Herrera',
        email: 'luciaherrera@yahoo.com',
        librosPrestados: []
    },
    {
        id: 4,
        nombre: 'Martín Castro',
        email: 'martincastro@mail.com',
        librosPrestados: []
    },
    {
        id: 5,
        nombre: 'Valentina Gómez',
        email: 'valegomez@hotmail.com',
        librosPrestados: []
    }
];

// PUNTO 2
// Funciones de Gestión de Libros
// a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo 
// libro al array libros.
// b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, autor o
//  género utilizando el algoritmo de búsqueda lineal. 
// c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año 
// utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros 
// ordenados en la consola.
// d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro. 

// HAGO UNA FUNCION maxId para que me vaya creando un nuevo id con un nuevo libro o usuario

function generarNuevoId(elementos) {
    // Creo un array con los valores de todos los id usando el metodo Map
    const ids = elementos.map(elemento => elemento.id);
    // Obtengo el id con mayor valor
    const maxId = Math.max(...ids)
    // Le sumo 1 al id con mayor valor y lo devuelvo 
    return maxId + 1
}

//a. Hago la funcion declarada de agregar libro con los datos necesarios
// Utilizo push para agregar el nuevo libro al array de libros

function agregarLibro(titulo, autor, anio, genero) {
    const nuevoLibro = {
        id: generarNuevoId(libros),
        titulo,
        autor,
        año: anio,
        genero,
        disponible: true
    }

    libros.push(nuevoLibro)
}

//b. Hago la funcion buscar libro (titulo, autor o genero)
// Uso una funcion flecha y el metodo 'forEach' para encontrar lo que busco
// Agrego un consolelog para mostrar lo que encuentra 

function buscarLibro(criterio, valor) {

    libros.forEach(libro => {
        if (libro[criterio] === valor) {
            console.log(libro)
        }
    });
}

// Pruebo el codigo en consola 
// console.log(buscarLibro('autor', 'Dario Gomez dos'))


//c. Defino la funcion para ordenar libros segun el criterio (titulo o año)
function ordenarLibros(criterio) {
    const cantidadLibros = libros.length; //Aca guardo la cantidad de libros para ordenar luego

    // Ahora uso el doble bucle que se usa en bubble sort
    for (let i = 0; i < cantidadLibros - 1; i++) {
        for (let j = 0; j < cantidadLibros - 1 - i; j++) {
            const a = libros[j][criterio];
            const b = libros[j + 1][criterio];
            // Hago un rechequeo de que lo comparado sea string
            if (typeof a === 'string' && typeof b === 'string') {
                if (a > b) {
                    [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
                }
            } else if (a > b) {
                [libros[j], libros[j + 1]] = [libros[j + 1], libros[j]];
            }
        }
    }
    // que muestre los libros ordenados
    libros.forEach(libro => {
        console.log(`
Titulo: ${libro.titulo}   
Autor: ${libro.autor}
Año: ${libro.año}
Genero: ${libro.genero}            
        `)
    })
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

// PUNTO 3
// 3. Gestión de Usuarios
// a)	Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario 
// al array usuarios. 
// b)	Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios
// c)	Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.
// d)	Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

// a. Creo la funcion para registrar un usuario nuevo con nombre e email.
// El id esta dado por la funcion para generar neuvo id y libros prestados es una array vacia
// uso push para agregar el usuario al array usuarios

function registrarUsuario(nombre, email) {
    const nuevoUsuario = {
        id: generarNuevoId(usuarios),
        nombre,
        email,
        librosPrestados: []
    }

    usuarios.push(nuevoUsuario)
}

// b. Creo una funcion que muestra todos los usuarios
// Uso el metodo forEach

function mostrarUsuarios() {
    console.log('Lista de todos los usuarios: ');
    usuarios.forEach(usuarios => {
        console.log(
            `id: ${usuarios.id}, 
            nombre: ${usuarios.nombre}, 
            email: ${usuarios.email}, 
            libros prestados: ${usuarios.librosPrestados}`)
    }
    )
}

// c. Hago la funcion buscar usuario
// Uso una funcion flecha y el metodo 'find' para encontrar lo que busco

function buscarUsuario(email) {
    const usuarioBuscado = usuarios.find(usuario => {
        return usuario.email === email
    });

    console.log(`
            id: ${usuarioBuscado.id}, 
            nombre: ${usuarioBuscado.nombre}, 
            email: ${usuarioBuscado.email}, 
            libros prestados: ${usuarioBuscado.librosPrestados}`)
}

// d. Uso splice para encontrar y borrar el usuario

function borrarUsuario(nombre, email) {
    const index = usuarios.findIndex(usuario => usuario.nombre === nombre &&
        usuario.email === email
    );

    // Hago un if para que me de un mensaje por consola si esta o si no esta
    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log(`El usuario ${nombre} con email ${email} ha sido eliminado`)
    } else {
        console.log(`No se encontro ningun usuario con nombre ${nombre} y email ${email}`)
    }
}

// PUNTO 4
// Sistema de Préstamos
// a)	Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como 
// no disponible y lo agregue a la lista de libros prestados del usuario. 
// Luego mostrar que libro se prestó y a que usuario.
// b)	Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como 
// disponible y lo elimine de la lista de libros prestados del usuario.

// a)
function prestarLibro(idLibro, idUsuario) {

    // Obtengo el libro y el usuario a partir de los ids
    const libro = libros.find(libro => libro.id === idLibro);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);

    // Si el libro esta disponible
    if (libro.disponible) {
        // Lo marco como NO disponible
        // y lo agrego a librosPrestados del usuario
        libro.disponible = false;
        usuario.librosPrestados.push(libro);
        console.log(`El usuario ${usuario.nombre} ha tomado a prestamo el libro ${libro.titulo}`)
    } else {
        // Si no muestro mensaje en consola
        console.log('El libro no se encuentra disponible');
    }
}

// b)
function devolverLibro(idLibro, idUsuario) {

    // Obtengo el usuario por id
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    // y obtengo el index del libro prestado al usuario por id
    const libroIndex = usuario.librosPrestados.findIndex(libro => libro.id === idLibro);

    // Si el index es -1 significa que dicho libro nunca fue prestado al usuario
    // Si es distinto de -1 significa que el libro si fue prestado al usuario
    if (libroIndex !== -1) {
        // Utilizo splice para remover el libro
        // y guardo en librosDevueltos el array con dicho libro que retorna splice
        const librosDevueltos = usuario.librosPrestados.splice(libroIndex, 1);
        // Como solo remuevo 1 elemento, la posicion 0 corresponde al libro a devolver
        // y lo marco como disponible
        librosDevueltos[0].disponible = true;
    } else {
        console.log('El usuario no tiene el libro solicitado');
    }
}

// PUNTO 5
// Reportes
// a)	Crear una función generarReporteLibros() que utilice métodos avanzados de arrays 
// (.map(), .filter(), .reduce()) para generar un reporte con la siguiente información:
// ✔	Cantidad total de libros. 
// ✔	Cantidad de libros prestados.  
// ✔	Cantidad de libros por género. 
// ✔	Libro más antiguo y más nuevo 

// a. Creo la funcion principal con las 4 funciones por funcionalidad pedida dentro

function generarReporteLibros() {
    subReporteCantidadLibros()
    subReporteLibrosPrestados()
    subReporteLibrosPorGenero()
    subReporteLibroAño()
}

// Funcion que calcula cantidad de libros
function subReporteCantidadLibros() {
    console.log(`Cantidad total de libros: ${libros.length}`)
}

// Funcion que calcula cantidad de libros prestados
function subReporteLibrosPrestados() {
    const librosPrestados = libros.reduce((contador, libro) => {

        if (!libro.disponible) {
            contador += 1;
        }

        return contador;

    }, 0)

    console.log(`Cantidad total de libros prestados: ${librosPrestados}`)
}

// Funcion que calcula cantidad de libros por genero
function subReporteLibrosPorGenero() {
    // Creo objetopara almacenar los contadores por genero
    let reporte = {};
    // Recorro cada libro para generar el reporte
    libros.forEach((libro) => {
        // obtengo el genero del libro
        const genero = libro.genero;

        // si el genero ya esta como propiedad en el reporte
        if (genero in reporte) {
            // le sumo 1 al contaor de ese genero
            reporte[genero] += 1;
        } else {
            // sino agrego el genero como propiedad
            // y lo inicializo con 1
            reporte[genero] = 1;
        }
    })
    // Devuelvo resultado final de cada contador por genero
    //return reporte;
    for (genero in reporte) {

        console.log(`El genero es: ${genero}. Hay ${reporte[genero]} libros de este genero`)
    }
}

// Funcion que calcula libro mas antiguo y libro mas nuevo
function subReporteLibroAño() {
    const años = libros.map(libro => libro.año);
    const añoMasAntiguo = Math.min(...años);
    const añoMasNuevo = Math.max(...años);

    const libroAntiguo = libros.find(libro => libro.año === añoMasAntiguo);
    const libroNuevo = libros.find(libro => libro.año === añoMasNuevo);

    console.log(`El libro mas antiguo de la biblioteca es: ${libroAntiguo.titulo}`);
    console.log(`El libro mas nuevo de la biblioteca es: ${libroNuevo.titulo}`)
}

// PUNTO 6
// Identificación Avanzada de libros
// a)	Implementar una función librosConPalabrasEnTitulo() que identifique y muestre los títulos de los libros que contienen más de una palabra. 
// Además la función debe excluir aquellos títulos que contengan números y/o caracteres especiales. Por último mostrar en la consola el array resultante

function librosConPalabrasEnTitulo() {
    // Filtro los libros 
    console.log('Los libros con mas de una palabra en el titulo son: ')
    libros.forEach(libro => {
        // Divido el titulo de cada libro por espacios
        // para obtener la cantidad de palabras
        const palabras = libro.titulo.split(' ');
        // Si tiene mas de 1 palabra retorno true
        // para que pase el filtro
        if (palabras.length > 1) {
            console.log(libro.titulo)
        };
    });
}

// PUNTO 7
// Cálculos Estadísticos
// a)	Desarrollar una función calcularEstadisticas() que obtenga información sobre los años de publicación de los libros:
// ✔	Obtener un array con los años de publicación de todos los libros.
// ✔	Calcular el promedio de los años de publicación.
// ✔	Encontrar el año de publicación más frecuente.
// ✔	Calcular la diferencia en años entre el libro más antiguo y el más nuevo. Para este punto es recomendable usar el objeto Math()

// a. Hago la funcion general con las caracteristicas pedidas:

function calcularEstadisticas() {
    // Obtengo array del año de cada libro.
    const años = libros.map(libro => libro.año);

    // Sumo cada año con reduce y luego divido por el total de años
    // para obtener el promedio.
    const promedio = años.reduce((promedio, año) => promedio += año, 0) / años.length;

    // Utilizo reduce para crear un contador por año.
    const frecuencia = años.reduce((contador, año) => {

        if (año in contador) {
            contador[año] += 1;
        } else {
            contador[año] = 1;
        }

        return contador;

    }, {});

    // Obtengo el año con mas frecuencia de publicacion
    let frecuente;
    for (año in frecuencia) {
        if (!frecuente || frecuencia[año] > frecuencia[frecuente]) {
            frecuente = año;
        }
    }

    // Para calcular la diferencia en años entre el libro más antiguo y el más nuevo primero:
    // Obtengo el numero mas chico con Math como año mas antiguo.
    const añoAntiguo = Math.min(...años);

    //Despues Obtengo el numero mas grande con Math como año mas nuevo.
    const añoNuevo = Math.max(...años);

    // Ahora Calculo la diferencia de ambos años.
    const diferenciaAños = añoNuevo - añoAntiguo;

    //Imprimo los resultados:
    console.log(`Los años de publicacion de los libros son:  ${años}`);
    console.log(`El promedio de los años de publicacion es:  ${promedio}`);
    console.log(`El año con mas frecuencia de publicacion es: ${frecuente}`);
    console.log(`La diferencia de años entre el libro mas antiguo y el mas nuevo es: ${diferenciaAños} años`);
}

//PUNTO 8
// Manejo de Cadenas
// a)	Crear una función normalizarDatos() que utilice métodos de strings para:
// ✔	Convertir todos los títulos a mayúsculas.
// ✔	Eliminar espacios en blanco al inicio y final de los nombres de autores.
// ✔	Formatear los emails de los usuarios a minúsculas.


// Creo la funcion principal
function normalizarDatos() {
    // Recorro cada libro para normalizar
    // el string del titulo y autor
    libros.forEach(libro => {

        libro.titulo = libro.titulo.toUpperCase();
        libro.autor = libro.autor.trim();

    });

    // Recorro cada usuario para normalizar
    // el string del email
    usuarios.forEach(usuario => {

        usuario.email = usuario.email.toLowerCase()

    });
}

//PUNTO 9
// Interfaz de Usuario por Consola
// a)	Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
// b)	El menú debe incluir opciones para todas las funcionalidades implementadas en el proyecto y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

// Primero importo la libreria para poder usar prompt
const prompt = require('prompt-sync')();

//a. Funcion principal

let opcionPrincipal

function menuPrincipal() {
    console.log('Bienvenido al sistema de gestion de la biblioteca! Que deseas hacer?');
    console.log('1- Agregar libro')
    console.log('2- Buscar libro')
    console.log('3- Ordenar libros')
    console.log('4- Borrar libro')
    console.log('5- Registrar usuario nuevo')
    console.log('6- Mostrar todos los usuarios')
    console.log('7- Buscar usuario')
    console.log('8- Borrar usuario')
    console.log('9- Sacar libro a prestamo')
    console.log('10- Devolver libro prestado')
    console.log('11- Generar reporte de libros')
    console.log('12- Ver libros con mas de una palabra en su titulo')
    console.log('13- Calcular estadisticas')
    console.log('14- Normalizar datos')

    opcionPrincipal = parseInt(prompt('Por favor ingresa el numero de la accion que desees ejecutar: '))
    switch (opcionPrincipal) {
        case 1:
            const titulo = prompt('Ingrese el titulo del libro: ')
            const autor = prompt('Ingrese el nombre del autor del libro: ')
            const anio = parseInt(prompt('Ingrese el año de publicacion del libro ingresado: '))
            const genero = prompt('Ingrese el genero del libro: ')
            agregarLibro(titulo, autor, anio, genero)
            break
        case 2:
            console.log('Por favor elija la opcion del criterio que desea utilizar para buscar el libro: ')
            console.log('1- Buscar por titulo')
            console.log('2- Buscar por autor')
            console.log('3- Buscar por genero')
            const criterioBuscar = parseInt(prompt(''))
            const valor = prompt('Ingrese el valor de busqueda: ')
            switch (criterioBuscar) {
                case 1: buscarLibro('titulo', valor); break;
                case 2: buscarLibro('autor', valor); break;
                case 3: buscarLibro('genero', valor); break;
                default: console.log('Criterio invalido');
            }
            break
        case 3:
            console.log('Por favor elija la opcion del criterio que desea utilizar para ordenar los libros: ')
            console.log('1- Ordenar por año')
            console.log('2- Ordenar por titulo')
            const criterio = parseInt(prompt(''))
            switch (criterio) {
                case 1: ordenarLibros('año'); break;
                case 2: ordenarLibros('titulo'); break;
                default: console.log('Criterio invalido');
            }

            break
        case 4:
            const id = parseInt(prompt('Por favor ingrese el id del libro que desea borrar: '))
            borrarLibro(id)
            break
        case 5:
            const nombre = prompt('Ingrese el nombre del nuevo usuario: ')
            const email = prompt('Ingrese su email: ')
            registrarUsuario(nombre, email)
            break
        case 6:
            console.log('Los usuarios registrados son: ')
            mostrarUsuarios()
            break
        case 7:
            const emailUsuario = prompt('Ingrese el email del usuario que desea buscar: ')
            buscarUsuario(emailUsuario)
            break
        case 8:
            const nombreUsuarioBorrar = prompt('Ingrese el nombre del usuario que desea borrar: ')
            const emailUsuarioBorrar = prompt('Ingrese el email del usuario que desea borrar: ')
            borrarUsuario(nombreUsuarioBorrar, emailUsuarioBorrar)
            break
        case 9:
            const idLibro = parseInt(prompt('Ingrese el Id del libro que desea retirar a prestamo: '))
            const idUsuario = parseInt(prompt('Ingrese el Id del usuario a quien desea prestar: '))
            prestarLibro(idLibro, idUsuario)
            break
        case 10:
            const idLibroDevuelto = parseInt(prompt('Ingrese el Id del libro que desea devolver: '))
            const idUsuarioDevuelve = parseInt(prompt('Ingrese el Id del usuario que devuelve el libro: '))
            devolverLibro(idLibroDevuelto, idUsuarioDevuelve)
            break
        case 11:
            generarReporteLibros()
            break
        case 12:
            librosConPalabrasEnTitulo()
            break
        case 13:
            calcularEstadisticas()
            break
        case 14:
            console.log('Los datos han sido normalizados')
            normalizarDatos()
            break
        default: console.log('Ninguna de las opciones ingresadas es correcta')
    }

    const volver = prompt('Desea volver al menu principal? y/n: ')

    if (volver === 'y') menuPrincipal();
    else console.log('Gracias por utilizar el software de gestion de la biblioteca')

}

menuPrincipal()


