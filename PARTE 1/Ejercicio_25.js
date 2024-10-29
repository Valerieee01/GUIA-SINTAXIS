function CalcularPrecioFinal(precio) {
    let descuento = precio * 0.1;
    let total = precio - descuento;
    return total;
}

let precio = prompt("Ingrese el valor del Jarabe: ");
alert(`El valor del Jarabe es de: ${CalcularPrecioFinal(precio)}`);