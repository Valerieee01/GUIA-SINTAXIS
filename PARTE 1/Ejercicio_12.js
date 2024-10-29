function areaRectangulo(base, altura) {
    return base * altura;
}

let base = parseInt(prompt("Ingrese la base del rectangulo: "));
let altura = parseInt(prompt("Ingrese la Altura del rectangulo: "));
alert(`El area del rectangulo es de: ${areaRectangulo(base,altura)}`);