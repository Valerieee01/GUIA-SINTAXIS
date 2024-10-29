
function distanciaEntreDosPuntos(x1,y1,x2,y2) {
    let distancia = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2);
    return Math.sqrt(distancia).toFixed(2);
}

let x1 = parseFloat(prompt("Ingrese el valor de la variable X1: "));
let y1 = parseFloat(prompt("Ingrese el valor de la variable Y1: "));
let x2 = parseFloat(prompt("Ingrese el valor de la variable X2: "));
let y2 = parseFloat(prompt("Ingrese el valor de la variable Y2: "));
alert(`El resultado de la distancia entre dos puntos es: ${distanciaEntreDosPuntos(x1,y1,x2,y2)}`)

