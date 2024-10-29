let suma = 0;
for (let i = 1; i <= 4; i++) {
    let notas = parseInt(prompt("INGRESE LA NOTA en un rango de 1 a 5"));
    if(notas >= 0 && notas <= 5){
        suma += notas;
    }
    else{
        i--;
        alert("NOTA NO CUMPLE EL RANGO DE CALIFICACION");
    }
}
let prom = suma / 4;
alert(`EL PROMEDIO ES DE LAS 4 NOTAS ES: ${prom}`)
