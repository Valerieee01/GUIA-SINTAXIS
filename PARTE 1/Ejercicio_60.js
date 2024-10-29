let cursos = parseInt(prompt("Ingresela cnatidad de cursos: "));

if (cursos < 6){
    alert("El pago de cada curso sera de: $2.000.000");
    let totalPagar = cursos * 2000000;
    alert(`El total a pagar es de: 
        - ${totalPagar}`);
} else{
    alert("El pago sera de: 1.200.000");
    let totalPagar = cursos * 1200000;
    alert(`El total a pagar es de: 
        - ${totalPagar}`);
}