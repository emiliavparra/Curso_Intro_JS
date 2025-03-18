// es una estructura de datos que puede contener propiedades y metodos
// sintaxis:

let casa = {
    direccion: 'Rioja altura 2000'
}

// propiedad: definimos el nombre de la propiedad objeto
// dos puntos: separa el nombre de la ppropiedad de su valor
// valor : puede ser cualquier tipo de dato que conocemos

let cantante = {
    nombre: 'Harry',
    apellido: 'Styles'
};

// aca hago nombre de objeto(cantante).propiedad(nombre/apellido)
console.log(cantante.nombre)
console.log(cantante.apellido)

// Otro ejemplo

let artista = {
    nombre: 'Harry',
    edad: 32,
    activo: true,
    saludar: function () { // ESTA FUNCION AQUI SE LLAMA METODO
        return 'Hola me llamo Harry'
    }
}

console.log(artista.saludar())

// Notacion de corchetes
console.log(artista['nombre'])