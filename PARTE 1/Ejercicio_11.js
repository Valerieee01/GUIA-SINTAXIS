function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

function multiplicacion(a,b) {
    return a * b;
}

function division(a,b) {
    if (b == 0){
        return "No se puede dividir por 0";
    }else {
        return a / b;
    }
}

let a = parseFloat(prompt("Ingrese el numero 1: "));
let b = parseFloat(prompt("Ingrese el numero 2: "));

alert("La suma es : "+ suma(a,b) + "\n"+ "La resta es: " + resta(a,b) + "\n"+ "La multiplicacion es: "  + multiplicacion(a,b)+ "\n" + "La división es: " + division(a,b));

