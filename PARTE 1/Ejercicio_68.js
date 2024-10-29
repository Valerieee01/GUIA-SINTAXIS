

(() => {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla del ${i}`)
        for (let f = 1; f <= 10; f++) {
            console.log(`${i} x ${f} = ${i * f}`);
        }
        console.log(''); 
    }
})();