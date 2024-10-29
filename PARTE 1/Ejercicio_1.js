let edad = parseInt(prompt("Ingresa tu edad: (SOLO NUMEROS POSITIVOS)"));
if(edad >= 18){
    alert("Es mayor de edad");
} else if(edad >= 1 && edad <= 17 ){
    alert("Es menor de edad");
} else{
    alert("Error los dotos no son validos");
}