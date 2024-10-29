
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let resultadoBinario = sumarConvertirBinario(num1, num2);
alert("La suma en binario es: " + resultadoBinario);


function sumarConvertirBinario(num1, num2) {
    const suma = num1 + num2;
    return suma.toString(2);
}