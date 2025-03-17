// UNA MATRIZ ES UNA ARRAY DE ARRAYS
//EJEMPLO:
const matrizEdades = [
    [20, 45, 22, 50, 13, 12],
    [14, 45, 12, 12, 13, 3],
    [5, 4, 22, 5, 13, 5],
    [9, 73, 12, 5, 8, 31]
]

console.log(matrizEdades[2])
console.log(matrizEdades[2][3]) //FILA 2 COLUMNA 3

// PODES ACCEDER USANDO UN BUCLE FOR ANIDADO
// EL PRIMER BUCLE RECORRE LAS FILAS (i)
// EL SEGUNDO RECORRE LAS COLUMNAS DENTRO DE CADA FILA (j)

// Ej matriz 3 x 4
let matrizEjemplo = [
    [1, 2, 3],
    [4, 5,],
    [7, 8, 9, 10]
]

for (let i = 0; i < matrizEjemplo.length; i++) {
    for (let j = 0; j < matrizEjemplo[i].length; j++) {
        console.log('Los nro de ejemplo son: ' + matrizEjemplo[i][j])
    }
}