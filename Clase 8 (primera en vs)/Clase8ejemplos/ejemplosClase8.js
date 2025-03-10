let edad = parseFloat(prompt('Ingresa tu edad: '))
console.log(typeof edad)
let acceso = ''

if (edad < 16) {
    acceso = 'prohibido';
}
else if (edad >= 16 && edad <= 18) {
    acceso = 'permitido solo acompañado por un tutor'
}
else {
    acceso = 'permitido'
}


