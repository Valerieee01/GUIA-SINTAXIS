    let suma = 0;
    let num = 0;
    for(let i = 0; i < 4; i++ ){
        num = prompt(`Ingrese el numero ${i+1}:`);
        suma += num;
       
        if (isNaN(num)) {
            alert("Por favor, ingrese un número válido.");
            i--;  // Restar 1 para volver a solicitar el número
            continue;
        }
    }

    let media = suma/4;
    alert(`La media es: ${media}`);

// function media(...numeros) {
//     let suma = 0;
//     for (let num of numeros) {
//         console.log(num);  // Muestra los números recibidos
//         suma += num;
//     }
//     let media = suma / numeros.length;
//     return media;  // Ahora el return está dentro de la función, no está separado
// }

// let numeros = [];
// while (true) {
//     let num = parseFloat(prompt(`Numeros: (0 para salir): `));
//     if (num === 0) {
//         break;
//     } else {
//         numeros.push(num);
//     }
// }

// let resultado = media(...numeros);  // Llamada a la función con el arreglo de números
// console.log("La media es:", resultado);


