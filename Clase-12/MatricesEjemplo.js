// CÓMO RECORRER UNA MATRIZ
// PASO A PASO 

let matriz = [
    [1, 2, 3], // indice 0 - longitud 3
    [4, 5], // índice 1 - longitud 2
];
for (let i = 0; i < matriz.length; i++) {
    // recorre las filas
    for (let j = 0; j < matriz[i].length; j++) {
        // recorre las columnas
        console.log("El número de la matriz es:" + matriz[i][j]); // muestra cada elemento
    }
}

// ▶️ VUELTA 1
// CONSULTA EL PRIMER BUCLE FOR
for (let i = 0; i < matriz.length; i++)  // este primer for - va a recorrer las filas

    // 🔸El ciclo inicia en 0 => let i = 0 
    // (recuerden que siempre es así porque sino no tomaría en cuanta la info que está en 
    // la posición 0 / indice 0)

    // 🔸Consulta condicion => i < matriz.length
    // en esta vuelta 
    // ➡️i = 0 
    // ➡️y matriz.length = 2 

    // porque❓=> mi matriz tiene 2 elementos - 2 arrays
    // Entonces pregunta 0 < 2? como la condición es verdadera✅ pasa a ejecutar el bloque de 
    // código {}
    // y también el modificador (la 3er pata de mi buble for => i++)

    // 🤔que hace el i++? => a lo que tiene i le suma 1, o sea en esta vuelta i = 0 por lo tanto suma 0 + 1
    // i se reasigna quedando entonces en 1 => i = 1

    // ❗Como dijimos, la condición es verdadera entonces ejecuta el bloque de código {}

    // Dentro del bloque tengo otro for (porque usamos un for anidado)

    // ▶️VUELTA 1  DEL CICLO FOR ANIDADO
    for (let j = 0; j < matriz[i].length; j++) // => este segundo for - va a recorrer las 
        // columnas

        // 🔸El ciclo inicia en 0 => let j = 0 
        // (recuerden que siempre es así porque sino no tomaría en cuanta la info que está 
        // en la posición 0 / indice 0)

        // 🔸Consulta la condición => j < matriz[i].length
        // en esta vuelta j = 0
        // y matriz[i].length = 3 
        // porque❓ tengo que posicionarme en la fila que estoy recorriendo en esta vuelta 
        // (matriz[0] => [1, 2, 3])

        // Entonces pregunta 0 < 3? como la condición es verdadera✅ pasa a ejecutar el bloque
        //  de código {}
        // ➡️console.log("El número de la matriz es:" + matriz[i][j]); 
        // 📢muestra en la terminal el mensaje => El número de la matriz es:1
        // y también el modificador (j++)
        // como en esta vuelta j = 0 suma 0 + 1
        // j se reasigna quedando entonces en 1 => j = 1

        // ❗❗Recuerden que el bucle for va a seguir iterando hasta que la condición deje 
        // de ser verdadera

        // Entonces va a volver a iterar
        // ▶️VUELTA 2 DEL CICLO FOR ANIDADO
        // En esta vuelta j se reasigno y tiene un valor de 1 
        for (let j = 1; j < matriz[i].length; j++)
            // ➡️o sea j = 1 
            // ➡️y matriz[i].length = 3 (porque seguimos en la misma fila)

            // como la condición es verdadera✅ 1 < 3 entonces vuelve a ejecutar el código
            console.log("El número de la matriz es:" + matriz[i][j]);
// 📢muestra en la terminal el mensaje => El número de la matriz es:2
// y también el modificador (j++)
// como en esta vuelta j = 1 suma 1 + 1
// j se reasigna quedando entonces en 2 => j = 2

// Y vuelve a iterar
// ▶️VUELTA 3 DEL CICLO FOR ANIDADO
// En esta vuelta j se reasigno y tiene un valor de 2 
for (let j = 2; j < matriz[i].length; j++)
    // ➡️o sea j = 2 
    // ➡️y matriz[i].length = 3 (porque seguimos en la misma fila)
    // como la condición es verdadera✅ 2 < 3 entonces vuelve a ejecutar el código
    console.log("El número de la matriz es:" + matriz[i][j]);
// 📢muestra en la terminal el mensaje => El número de la matriz es:3
// y también el modificador (j++)
// como en esta vuelta j = 2 suma 2 + 1
// j se reasigna quedando entonces en 3 => j = 3

// Y vuelve a iterar
// ▶️VUELTA 3 DEL CICLO FOR ANIDADO
// En esta vuelta j se reasigno y tiene un valor de 3 
for (let j = 3; j < matriz[i].length; j++)
    // ➡️o sea j = 3 
    // ➡️y matriz[i].length = 3 (porque seguimos en la misma fila)

    // Aca la condición deja de ser verdadera❌ porque 3 < 3 entonces se interrumpe el ciclo
    // Y pasa nuevamente al PRIMER BUCLE FOR (PARA SEGUIR RECORRIENDO FILAS)

    // ▶️▶️VUELTA 2 DEL FOR QUE RECORRE LAS FILAS - 1ER BUCLE FOR
    // ❗Aca recordemos que nuestra i se había reasignado 
    for (let i = 1; i < matriz.length; i++)

        // 🔸vuelve a hacer la consulta
        // ➡️i < 2? (recuerden que la longitud de nuestra matriz es 2 porque tiene 2 elementos 
        // / 2 arrays)
        // como la condición es verdadera✅ ejecuta el bloque de código {}
        // y también el modificador i++
        // como i = 1 hace 1+1
        // por lo que i se reasigna con el valor de 2

        // ▶️En mi bloque de código esta el 2do for (for anidado que recorre las columnas)
        // Aca el bucle tiene que empezar nuevamente en 0
        for (let j = 0; j < matriz[i].length; j++)

            // 🔸El ciclo inicia en 0 => let j = 0 
            // ❗❗Cada vez que el primer for da una vuelta y entra nuevamente en el segundo for
            // ❗❗la variable j se vuelve a declarar iniciando en 0.
            // (recuerden que siempre es así porque sino no tomaría en cuanta la info que está en la posición 0 / indice 0)
            // 🔸Consulta la condición => j < matriz[i].length
            // ➡️en esta vuelta j = 0
            // ➡️y matriz[i].length = 2 
            // porque❓ tengo que posicionarme en la fila que estoy recorriendo en esta vuelta (matriz[1] => [4, 5])

            // Entonces pregunta 0 < 2? como la condición es verdadera✅ pasa a ejecutar el bloque de código {}
            console.log("El número de la matriz es:" + matriz[i][j]);
// 📢muestra en la terminal el mensaje => El número de la matriz es:4
// y también el modificador (j++)
// como en esta vuelta j = 0 suma 0 + 1
// j se reasigna quedando entonces en 1 => j = 1

// El bucle for va a seguir iterando hasta que la condición deje de ser verdadera

// Entonces vuelve a iterar
// ▶️VUELTA 2 DEL CICLO FOR ANIDADO
// En esta vuelta j se reasigno y tiene un valor de 1 
for (let j = 1; j < matriz[i].length; j++)
    // ➡️o sea j = 1 
    // ➡️y matriz[i].length = 2 (porque seguimos en la misma fila)

    // como la condición es verdadera✅ 1 < 2 entonces vuelve a ejecutar el código
    console.log("El número de la matriz es:" + matriz[i][j]);
// 📢muestra en la terminal el mensaje => El número de la matriz es:5
// y también el modificador (j++)
// como en esta vuelta j = 1 suma 1 + 1
// j se asigna quedando entonces en 2 => j = 2

// Y vuelve a iterar
// ▶️VUELTA 3 DEL CICLO FOR ANIDADO
// En esta vuelta j se reasigno y tiene un valor de 2 
for (let j = 2; j < matriz[i].length; j++)
    // ➡️o sea j = 2 
    // ➡️y matriz[i].length = 2 (porque seguimos en la misma fila)
    // como la condición es falsa❌ 2 < 2 entonces el ciclo se detiene

    // Y vuelve al primer for

    // ▶️VUELTA 3 DEL FOR QUE RECORRE LAS FILAS - 1ER BUCLE FOR
    // ❗Aca recordemos que nuestra i se había reasignado 
    for (let i = 2; i < matriz.length; i++)
        console.log()
// 🔸vuelve a hacer la Consulta
// ➡️i < 2? (recuerden que la longitud de nuestra matriz es 2 porque tiene 2 elementos / 2 arrays)
// Acá como la condición es falsa❌ el ciclo completo se detiene

// 🟢 Resultado final en consola:
// El número de la matriz es:1
// El número de la matriz es:2
// El número de la matriz es:3
// El número de la matriz es:4
// El número de la matriz es:5