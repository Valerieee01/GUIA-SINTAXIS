function numerosAleatoreosPares() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    const esPar = numeroAleatorio % 2 === 0;
    if (esPar) {
        alert(`El número generado es ${numeroAleatorio}, y es par.`);
    } else {
        alert(`El número generado es ${numeroAleatorio}, y es impar.`);
    }
}

numerosAleatoreosPares();