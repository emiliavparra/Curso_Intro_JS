// El switch se usa cuando sabemos o queremos que la expresion sea exactamente igual
// a un valor esperado 

let fruta = 'wefwef';
switch (fruta) {
    case 'manzana':
        console.log('Que rica la manzana')
        break
    case 'naranja':
        console.log('Que rica la naranja')
        break
    default: // como posibilidad de que ninguno de los casos sea verdadero
        console.log('Que fruta es?')
}

let edad = 5
switch (edad) {
    case 5:
        console.log('Tiene la edad adecuada')
        break
    case 10:
        console.log('Tiene 10 años')
        break
}

// EJEMPLO MAS OPTIMIZADO
const dia = 'lunes'
switch (dia) {
    case 'sabado':
    case 'domingo':
        console.log('Es fin de semana')
        break

    default: //OJO CON EL DEFAULT SI NO ESTAN DECLARADOS QUE SERIA DEFAULT 
        // POR EJ SI PONGO 'ASJSJSJ' VA A DAR LO QUE DECLARE EN DEFAULT
        console.log('Dia laboral')
}

