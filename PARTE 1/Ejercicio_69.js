
let altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));
if (isNaN(altura)) {
    alert(`No es posible realizar la ejecución`)
} else{
    for (let i = 1; i <= altura; i++) {
        let fila = '';
        for (let j = 1; j <= i; j++) {
            fila += '*'; 
        }
        console.log(fila); 
    }
}