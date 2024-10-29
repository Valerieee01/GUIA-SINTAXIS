let numero = parseInt(prompt("Ingrese un numero: "));
let impares = [];
for (let i = 0; i <= numero; i++) {
    if(i % 2 != 0){
        impares.push(i);
    }
}
alert(`Los impares son: ${impares}`);

