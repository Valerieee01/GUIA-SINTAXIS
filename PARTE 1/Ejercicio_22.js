let minutos = parseInt(prompt("Ingrese los minutos de la llamada: "));
const VALORMINUTO = minutos * 355;
const IVA = valorMin * 0.2;
let total = valorMin + valorIva;
alert(`El total a pagar por la llamada es de: ${total}`)