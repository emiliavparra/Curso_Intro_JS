// Ejercicio 4: Verificar estado de vacunación
// Solicita al usuario el nombre de su mascota y si está vacunada. 
// Usa una función flecha para verificar y mostrar su estado de vacunación.

// 1. Importo la libreria para usar prompt.

const prompt = require('prompt-sync')();

// Solicito al usuario el nombre de su mascota
let nombreMascota = prompt('Por favor ingresa el nombre de tu mascota: ')
// Solicito al usuario que responda si esta vacunado
let vacunaMascota = (prompt('Su mascota esta vacunada? responda SI o NO: '))

// Creo la funcion que va a verificar y mostrar el estado de vacunacion
const estadoVacunacion = (Nombre, VacunadoOno) =>
    vacunaMascota === 'SI' ? // Uso el ternario para darle las dos opciones de mensaje 
        'Su mascota se encuentra vacunada' :
        'Su mascota no esta vacunada';

// Muestro el resultado en consola
console.log(estadoVacunacion(nombreMascota, vacunaMascota))


