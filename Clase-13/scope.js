// es el alcance que tiene una variable

// SCOPE LOCAL: Variable por dentro de mi funcion

// function hola() {
//     let saludo = 'Hola que tal ';
//     return saludo
// }

// console.log(saludo) // me dice 'not defined' porque estoy llamando a saludo
// por fuera de la funcion

// SCOPE GLOBAL: Variable por fuera de cualquier funcion

let saludo = 'Hola que tal'

function hola() {
    return saludo
}

console.log(saludo)

