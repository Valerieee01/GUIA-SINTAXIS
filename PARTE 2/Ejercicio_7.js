
const mayor = (...array) => {
    return Math.max(...array);
}

let array = [];
let numeros = parseInt(prompt("Cuantos numeros desea ingresar: "))
for (let i = 0; i < numeros; i++) {
    let num = parseFloat(prompt(`Ingrese el numero ${(i+1)} : `));
    console.log(num)
    array.push(num);
}

alert(`El numero mayor es: ${mayor(...array)}`);


