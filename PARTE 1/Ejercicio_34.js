
function volumenDeposito(radio,altura) {
    let volumen = PI * (Math.pow(radio, 2)) * altura;
    return volumen;
}


function tiempoLlenado(volumen,caudal) {
    let tiempo = caudal / volumen;
    return tiempo;  
}


let caudal = parseFloat(prompt("Ingrese el caudal: "));
let altura = parseFloat(prompt("Ingrese la altura: "));
let radio = parseFloat(prompt("Ingrese el radio:"))
const PI = 3.14 
let volumen = volumenDeposito(radio,altura);
alert(`El deposito se llenara en un estimado de: ${tiempoLlenado(volumen,caudal)} m`)