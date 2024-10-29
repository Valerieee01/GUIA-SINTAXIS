
function CalcularExpreson(a,b,c) {
    return (a + 7 *c) / (b + 2 - a) + 2*b;
}


let a = parseInt(prompt("Ingrese el valor de a: "));
let b = parseInt(prompt("Ingrese el valor de b: "));
let c = parseInt(prompt("Ingrese el valor de c: "));
alert(`El resultado de la expresión es: ${CalcularExpreson(a,b,c)}`);