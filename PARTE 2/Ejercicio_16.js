function convertirString(numero) {
    let numeroLetra; 

    if (numero === 0) {
        numeroLetra = "cero";
    } else if (numero === 1) {
        numeroLetra = "uno";
    } else if (numero === 2) {
        numeroLetra = "dos";
    } else if (numero === 3) {
        numeroLetra = "tres";
    } else if (numero === 4) {
        numeroLetra = "cuatro";
    } else if (numero === 5) {
        numeroLetra = "cinco";
    }
    alert(`El número ingresado es: ${numeroLetra}`);
}

let numero = parseInt(prompt("Ingrese un número de 0 a 5: "));

while (numero < 0 || numero > 5) {
    numero = parseInt(prompt("Error. Ingrese un número de 0 a 5: "));
}

convertirString(numero);