
const mayor = (...array) => {
    return Math.max(...array);
}

let array = [];
for (let i = 0; i < 2; i++) {
    let num = parseFloat(prompt(`Ingrese el numero ${(i+1)} : `));
    array.push(num);
}

alert(`El numero mayor es: ${mayor(...array)}`);



// (a,b) => a < b ? console.log(`${b} es mayor`) : console.log(`${a} es mayor`);