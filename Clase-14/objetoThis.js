
// Hace referencia en si al objeto en el que estamos
// se usa porque si renombramos el objeto(artista) se rompe el codigo si no lo usamos

let artista = {
    nombre: 'Harry',
    edad: 32,
    activo: true,
    saludar: function () { // ESTA FUNCION AQUI SE LLAMA METODO
        return 'Hola me llamo ' + this.nombre
    }
}

console.log(artista.saludar())