
function grados_A_farenheit(grados) {
    return (grados * 9/5) + 32;
}

let grados = parseFloat(prompt("Ingrese los grados que desea convertir a Farenheit: "))
alert(`Son en total: ${grados_A_farenheit(grados)} Farenheit`);
