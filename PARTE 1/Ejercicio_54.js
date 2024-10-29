const restarNumeros = (n1, n2) =>{
    if (n1 >= n2) {
        let resta = n1 - n2;
        alert (`El resultado de restar ${n1} y ${n2} es: ${resta}`);

    } else {
        alert (`No se puede hacer la resta`);
    }
}

while (true) {
    n1 = parseFloat(prompt(`Ingresa el primer numero: `));
    n2 = parseFloat(prompt(`Ingresa el segundo numero: `));
    restarNumeros(n1, n2);
}