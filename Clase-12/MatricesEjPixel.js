// Ejemplo pixel

const corazon = [
    ['.', '#', '.', '.', '.', '#', '.'],
    ['#', '#', '#', '.', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#'],
    ['.', '#', '#', '#', '#', '#', '.'],
    ['.', '.', '#', '#', '#', '.', '.'],
    ['.', '.', '.', '#', '.', '.', '.']
]

for (let i = 0; i < corazon.length; i++) {
    let fila = '';
    for (let j = 0; j < corazon[i].length; j++) {
        fila += corazon[i][j] + '';
    }
    console.log(fila);
}
