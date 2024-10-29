let n = parseInt(prompt("¿Cuántos números deseas ingresar?"));
let arrayNumeros = [];

for (let i = 0; i < n; i++) {
    let numero = parseFloat(prompt("Ingrese la cantidad de números que desee: "));
    arrayNumeros.push(numero);
}

let suma = sumaNumerosArray(...arrayNumeros);
alert("La suma de los números es: " + suma);

function sumaNumerosArray(...array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 0) {
            suma += element;
        } else {
            suma = 0;
        }
    }
    return suma;
}