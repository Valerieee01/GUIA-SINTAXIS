
function areaRectangulo(altura,base) {
    let area = base * altura;
    alert(`El area del Rectangulo es:  ${area}`)
}

while (true) {
    let altura = parseFloat(prompt("Ingrese la altura del rectangulo es:"));
    let base = parseFloat(prompt("Ingrese el base del rectangulo es: "))
    if (base >= 0 && altura >= 0){
        areaRectangulo(altura,base)  
        break;
    }
    else{
        alert("No se aceptan Valores negativos")
    }
    
}