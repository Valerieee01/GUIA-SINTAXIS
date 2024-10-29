function raicesCuadradas(a, b, c) {
    // Calcular el discriminante
    let D = b * b - 4 * a * c;
    
    // Si el discriminante es positivo, hay dos raíces reales distintas
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log("Dos raíces reales distintas: x1 =", x1, ", x2 =", x2);
    }
    // Si el discriminante es cero, hay una raíz real doble
    else if (D === 0) {
        let x = -b / (2 * a);
        console.log("Una raíz real doble: x =", x);
    }
    // Si el discriminante es negativo, no hay raíces reales
    else {
        console.log("No hay raíces reales, las raíces son complejas.");
    }
}


let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));
alert(`El resultado de la Ecuación en Segundo Grado: ${raicesCuadradas(a,b,c)}`); 