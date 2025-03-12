// se repiten siempre y cuando la condicion se cumpla. Sino se rompen

// for (inicio, condicion, modificador) {
// codigo
// } 

for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log('Dando la vuelta numero ' + vuelta)
}

// PASO POR PASO:
// 1. LET VUELTA = 1 ES DONDE ESTABLEZCO EL VALOR INICIAL DE MI CONTADOR
// 2. VUELTA <= 5 ES LA CONDICION. ACA SE PREGUNTA SI ES V (SIGUE) PERO SI ES F (SE DETIENE)
// 3. VUELTA ++ ES EL MODIFICADOR. Modifica el contador segun hayamos especificado 

// EJEMPLO 1
for (let num = 1; num <= 10; num++) {
    console.log(` El valor de num es ${num}`)
}
