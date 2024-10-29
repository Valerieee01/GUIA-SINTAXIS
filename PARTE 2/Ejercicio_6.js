
let tabla  = parseInt(prompt("Que tabla quieres ver: "));
let desdeQueNumero = parseInt(prompt("Desde que número deseas multiplicar: "))
let hastaQueNumero = parseInt(prompt("Hasta que número deseas multiplicar: "))

(() => {
    for ( let i = desdeQueNumero ; i <= hastaQueNumero; i++) {
        if (i !== tabla) {
           let valor = i * tabla
        }  else{
            continue;
        }
        console.log(`${tabla} x ${i} = ${valor} `);
    }
})();