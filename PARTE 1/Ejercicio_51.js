const descuento = (pago) => {
        let descuento = pago * 0.15;
        let totalDescuento = pago - descuento;
        alert(`El decuento es: ${descuento.toFixed(2)}
    El total es: ${totalDescuento.toFixed(2)}`);
}


while (true) {
    let pago = parseFloat(prompt("Ingrese el pago: "));
    if (isNaN(pago)) {
        alert(`Error datos incompletos`);
    } else if(pago > 130000) {
        descuento(pago);
        break;
    }
}

