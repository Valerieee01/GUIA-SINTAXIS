let palabra = prompt("Introduce una palabra que deseas invertir:");

function invertirPalabra(palabra) {
    let tamano = palabra.length;
    let invertida = [];
    for (let i = tamano - 1; i >= 0; i--) {
        invertida.push(palabra[i]);
    }
    alert (`La palabra invertida es :  ${invertida}`);   
}