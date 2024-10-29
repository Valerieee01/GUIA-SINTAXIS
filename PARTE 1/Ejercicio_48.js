

let op = 0;
while (op !== 3) { 
    let op = parseInt(prompt(`Desea Calcular el area de:
        1. Circunferencia
        2. Triangulo
        3. Salir`));
    switch (op) {
        case 1:
            let radio = parseFloat(prompt("Ingrese el radio de la Circunferencia: "))
            areaCircunferencia(radio)
            break;
        
        case 2:
            let base = parseFloat(prompt("Ingrese la base del triangulo: "))
            let altura = parseFloat(prompt("Ingrese la base del triangulo"))
            areaTriangulo(base, altura);
            break;
    }
}

function areaCircunferencia(radio) {
        let areaCircunferencia = Math.PI*Math.pow(radio, 2)
        alert(`El area de la circunferencia de radio ${radio} es: ${areaCircunferencia.toFixed(2)}`)
}

function areaTriangulo(base, altura) {
    let area = (base * altura)/2;
    alert(`El area del triangulo con 
        - Base: ${base} 
        - Altura ${altura}
        Es de : ${area.toFixed(2)} `)
}