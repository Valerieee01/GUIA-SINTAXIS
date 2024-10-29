function areaCircunferencia(radio) {
    return Math.PI * Math.pow(radio,2);
}

function logitudCircunferencia(radio) {
    return 2 * Math.PI * Math.pow(radio,2);
}
let radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
alert(`El area de la Circunferencia es de: ${areaCircunferencia(radio)}\n
El longitud de la Circunferencia es de: ${logitudCircunferencia(radio)}`);