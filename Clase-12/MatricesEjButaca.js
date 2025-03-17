// EJEMPLO CON BUTACAS DE CINE

let butacasCine = [
    ['ocupada', 'libre', 'ocupada', 'ocupada', 'libre'],
    ['ocupada', 'ocupada', 'ocupada', 'libre', 'ocupada'],
    ['ocupada', 'ocupada', 'ocupada', 'ocupada', 'libre'],
    ['ocupada', 'libre', 'ocupada', 'ocupada', 'ocupada']
]

// Inicializo las variables para butacas libres y ocupadas
let libre = false;
// Recorremos la matriz con  un bucle for para verificar el estado de las byutacas

for (let i = 0; i < butacasCine.length; i++) {
    for (let j = 0; j < butacasCine[i].length; j++) {
        // si la butaca esta libre,cambiamos la variable 'libre' a true
        if (butacasCine[i][j] === 'libre') {
            libre = true;
            console.log(`La butaca en la fila ${i + 1}, columna ${j + 1} està libre`
            )
        }
    }
}