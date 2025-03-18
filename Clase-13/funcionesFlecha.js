// se incorporaron dentro del ecmascript version 6
// nos hacen escribir menos codigo
// son siempre anonimas, es decir no tienen nombre como las funciones normales
// la flecha en si (=>) reemplaza la palabra function


// Por ej, una funcion de suma seria:
function sumar(a, b) {
    return a + b
}

// La version reducida usando funcion arrow

let sumar = (a, b) => a + b;

// si recibo un unico parametro, no hace falta usar parentesis

let doble = a => a * 2

// otro ejemplo con llaves y return

let esMultiplo = (a, b) => {
    let resto = a % b; // Obtenermos el resto de la division
    return resto == 0; // si el resto es 0 es multiplo
}

// otro ejemplo con el objeto NEW DAY
// EL OBJETO NEW DAY tiene propiedades como gethours y getminutes
// no tiene parametros pero SI O SI hay que poner () por la sintaxis

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}

console.log(horaActual)

