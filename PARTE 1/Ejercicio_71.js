const numValidar = parseInt(prompt("Ingrese el numero que deseas validar: "));
if (esPrimo(numValidar)) {
    alert(`El número ${numValidar} es primo`);
} else {
    alert(`El número ${numValidar} no eses primo`);
}

function esPrimo(numValidar) {
    if (numValidar <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numValidar); i++) {
        if (numValidar % i === 0) {
            return false;
        }
    }
    
    return true;
}
