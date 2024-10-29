function calcularPrecioEntrada(edad) {
    if(edad < 4){
        alert("Tu entrada es gratis");
    }else if (edad >=4 && edad <= 18){
        alert("El valor de tu entrada es de  5 Euros");
    } else if (edad > 18){
        alert("El valor de tu entrada es de 10 Euros");
    } else{
        alert("Edad es inválida, vuelve a intentar");
    }
}

let edad = parseInt(prompt("Ingresa tu edad: "));
calcularPrecioEntrada(edad);