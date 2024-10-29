for (let i = 1; i <= 10; i++) {
    let espacios = ' '.repeat(10 - i);
    let asteriscos = '*'.repeat(2 * i - 1);
    console.log(espacios + asteriscos);
}