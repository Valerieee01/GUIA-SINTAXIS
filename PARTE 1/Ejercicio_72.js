let palabra = prompt("Introduce una palabra que deseas invertir:");
let tamano = palabra.length;
let invertida = [];
for (let i = tamano - 1; i >= 0; i--) {
    alert(palabra[i]);
    invertida.push(palabra[i]);

}
alert (`La palabra invertida es :  ${invertida}`);