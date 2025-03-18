// COERCION IMPLICITA: Implicitamente le re asigna el tipo de dato para poder concatenar

console.log(5 + '5')
console.log('10' - 5)
console.log('5' - '3')
console.log('Hola' * 3) // da NotANumber

// COERCION EXPLICITA: Lo decide el desarrollador
// primero usas type of para saber el tipo
// y luego usar parseInt()o parseFloat() o Number()

let edadUsuario = parseInt('25')
console.log(typeof edadUsuario)

//Number = convierte todo el string a numero. Si hay algo raro da N/n
let datos = Number('355331371182Emilia')
console.log(datos)
//USARLO CUANDO DEBERIA SER UN NUMERO PURO

//Parseint = lee hasta donde haya nros enteros. Si hay letras, corta ahi. Por ejemplo:
let direccion = parseInt('532Palestina')
console.log(direccion)
// USALO CUANDO QUERES ENTEROS Y CAPAZ VIENEN CON ALGO MAS

//Parsefloat = Lee nros con decimales. Si hay letras, corta ahi
let temperatura = parseFloat('36.5Almagro')
console.log(temperatura)
// SI ESPERAS NROS CON DECIMALES Y CAPAZ VIENEN CON TEXTO