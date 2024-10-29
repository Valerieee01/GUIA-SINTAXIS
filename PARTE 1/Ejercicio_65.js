let num = parseInt(prompt("Ingrese un numero:"));
let numeros = [];
agregarArreglo(num);
reverse(numeros);

function agregarArreglo(num) {
    for (let i = 1; i <= num; i++) {
        numeros.push(i); 
    }  
}

function reverse(numeros) {
    let reversa = numeros.reverse();
    alert(` ${reversa.join(', ')}`);
}