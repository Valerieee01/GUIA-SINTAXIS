
function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, ''); // esta EXPRESION REGULAR ELIMINA VOCALES
}

const texto = prompt("Ingrese una cadena:");
const textoSinVocales = eliminarVocales(texto);
alert("La cadena sin vocales es: " + textoSinVocales);