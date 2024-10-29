function inversoAditivo(numeros) {
    let resultado = []; 
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(-numeros[i]);
    }
    return resultado; 
}


let conjuntoNumeros = prompt("Ingrese un conjunto de números separados por comas:").split(',').map(Number);
let resultado = inversoAditivo(conjuntoNumeros);
alert("El inverso aditivo de los números es: " + resultado.join(', '));