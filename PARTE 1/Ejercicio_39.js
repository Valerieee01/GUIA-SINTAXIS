
const calculaValorTrabajo = function (valorM2, cantM2) {
    return valorM2 * cantM2
}

let valorDelM2 = parseFloat(prompt("Ingrese el valor de M2: "));
let cantM2 = parseFloat(prompt("Ingrese la cantidad de M2: "));
alert(`El valor del trabajo es de: ${calculaValorTrabajo(valorDelM2,cantM2)}`);