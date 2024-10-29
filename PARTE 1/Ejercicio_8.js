function calcularNivel(puntuacion) {
    let dinero;
    if(puntuacion === 0.0){
        alert("Esta en el nivel Inaceptable");
    } else if (puntuacion === 0.4){
        alert("Estas en el nivel : Meritorio");
        total = 2400 * puntuacion;
        dinero = 2400 + total;
        alert(`El dinero que recibira el empleado es de: ${dinero}`);
    }else if (puntuacion >= 0.6){
        alert("Estas en el nivel : Bueno");
        total = 2400 * puntuacion;
        dinero = 2400 + total;
        alert(`El dinero que recibira el empleado es de: ${dinero}`);
    }else{
        alert(`El nivel que ingresaste es invalido, intenta nuevamente `);
    }

}


let nivel = parseFloat(prompt("Califica a tu empleado teniendo en cuenta los siguientes niveles \n - 0.0 \n- 0.4 \n- 0.6 o más \n(Calificacion de inaceptable a excelente)"))
calcularNivel(nivel);