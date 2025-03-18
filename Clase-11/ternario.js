// IF TERNARIO ES UNA LINEA DE CODIGO RESUMIDA
// (CONDICION) ? 
// ACCION (TRUE)
// : OTRA COSA (ELSE)

// ACA DESPUES DEL ? EL PRIMER VALOR ES TRUE (PUEDE VOTAR) O FALSE (NO PUEDE VOTAR)
// const edad = 17;
// const puedeVotar = edad >= 18 ? 'Puede votar' : 'No puede votar' 
// console.log(puedeVotar)

// OTRO EJEMPLO TERNARIO
const edad = 16;
const puedeVotar =
    edad >= 18
        ? 'puede votar'
        : edad >= 16 // ESTO REEMPLAZA EL 'ELSE'
            ? 'Debe inscribirse para votar'
            : 'No puede votar';
console.log(puedeVotar)

// MISMO EJEMPLO PERO NO TERNARIO
if (edad >= 18) {
    console.log('Puede votar')
} else if (edad >= 16) {
    console.log('Debe inscribirme para votar')
} else {
    console.log('No puede votar')
}