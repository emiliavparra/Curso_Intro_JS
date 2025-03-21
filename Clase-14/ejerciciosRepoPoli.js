// # Ejercicios de Objetos Literales en JavaScript

// ## 📌 Ejercicio 1: Acceder a Propiedades

// - Crea un objeto llamado persona con las propiedades nombre y edad.
//  Luego, muestra un mensaje en consola utilizando los valores de 
// estas propiedades.

let persona = {
    nombre: 'Emilia',
    edad: 34
}

console.log(persona.nombre)
console.log(persona.edad)

// ## 📌 Ejercicio 2: Modificar Propiedades

// Crea un objeto auto con las propiedades marca, modelo y año. 
// Luego, cambia el valor de año y muestra el objeto actualizado en consola.

// 1. Creo el objeto auto con las propiedades pedidas
let auto = {
    marca: 'Ford',
    modelo: 'fiesta',
    año: 2010
}

// 2. Imprimo el año en consola (2010)
console.log(auto.año) // aca da 2010

//3. Cambio el año
auto['año'] = 2025
console.log(auto.año)


// ## 📌 Ejercicio 3: Usar this

// Crea un objeto usuario con las propiedades nombre y email, y un método mostrarInfo
// que muestre un mensaje con su información utilizando this.

// 1. Creo el objeto. Le agrego una funcion metodo para mostrar toda la info junta
let usuario = {
    nombre: 'Emilia',
    email: 'parraemiliavictoria@gmail.com',
    informacion: function () {
        return this.usuario
    }
}

// Imprimo la informacion 
console.log(usuario)