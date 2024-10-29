
while (true) {
    let nota = parseFloat(prompt("Ingrese la nota:"));
    if(nota <= 10 && nota > 9){
        alert("Calificacion A, Excelente");
        break;
    } else if(nota <= 9 && nota > 8){
        alert("Calificación A, Muy bien");
        break;
    } else if(nota <= 8 && nota >7.5){
        alert("Califición A, Bien");
        break;
    } else if(nota < 7.5){
        alert("Calificacion D, muy mal");
        break;
    } else{
        alert("No es una contraseña Invalida");
    }
}