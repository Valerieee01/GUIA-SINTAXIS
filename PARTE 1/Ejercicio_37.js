

function pesoCajas() {
    const PESO_CAJA = 748;
    let numCajas = 25;
    let pesoCamion = PESO_CAJA * numCajas;
    return pesoCamion;
}

alert (`El peso del camión es de: ${pesoCajas()} Kg`);