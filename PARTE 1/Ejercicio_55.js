
while (true) {
    let tipo_m = prompt(`Selecciona el tipo de membresia que tienes: 
        - A
        - B
        - C`);
    let precioHelado = parseFloat(prompt("Ingrese el valor del Helado: ")).toFixed(2);
    let descuento, valorHelado;
    if (tipo_m.toUpperCase() === "A") {
        alert("Con tu menbresia el descuento es de: 10%")
        descuento = precioHelado*0.10
        valorHelado = precioHelado - descuento;
        alert(`El precio de tu helado con descuento es de: ${valorHelado}`)
        break;
    } else if (tipo_m.toUpperCase() === "B"){
        alert("Con tu menbresia el descuento es de: 15%")
        descuento = precioHelado*0.15
        valorHelado = precioHelado - descuento;
        alert(`El precio de tu helado con descuento es de: ${valorHelado}`)
        break;

    } else if (tipo_m.toUpperCase() === "C"){
    
        alert("Con tu menbresia el descuento es de: 20%")
        descuento = precioHelado*0.20
        valorHelado = precioHelado - descuento;
        alert(`El precio de tu helado con descuento es de: ${valorHelado}`)
        break;
    }else{
        alert("NO contamos con ese tipo de membresia intenta nuevamente")

    }

}