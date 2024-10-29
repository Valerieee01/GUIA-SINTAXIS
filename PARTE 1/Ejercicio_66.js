let cantidad = parseInt(prompt("Inversion: "));
let interes = parseFloat(prompt("Interes anual: "));
let anios = parseInt(prompt("años de inversion: "));

if (isNaN(cantidad) || isNaN(interes) || isNaN(anios)) {
    alert (`Error hay datos incorrectos`)   
} else {
    for (let i = 1; i <= anios; i++) {
        let porcentaje = interes * 0.001;
        let ganancias = cantidad + (cantidad * porcentaje);
        alert(`LA GANANCIA EN EL AÑO ${i} ES DE: ${ganancias}`)
    }
}
