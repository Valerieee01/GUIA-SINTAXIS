function areaTriangulo(base, altura) {
    return ( base * altura)/2;
}

let base = parseInt(prompt("Ingrese la base del triangulo: "));
let altura = parseInt(prompt("Ingrese la Altura del triangulo: "));
alert(`El area del rectangulo es de: ${areaTriangulo(base,altura)}`);