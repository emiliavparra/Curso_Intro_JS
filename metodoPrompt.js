
// CADA VEZ QUE NECESITE USAR EL PROMPT TENGO QUE AGREGAR ESTA LINEA
// PERMITE EL USO DEL PROMPT POR LA LIBRERIA 
const prompt = require('prompt-sync')();

const nombre = prompt('¿Cómo te llamas? ');
console.log(`Hola, ${nombre}!`);