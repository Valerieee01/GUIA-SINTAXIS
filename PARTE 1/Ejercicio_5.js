
let edad = parseFloat(prompt("Cual es tu edad: "));
let ingresos = parseFloat(prompt("Cuales son sus ingresos: "));
if(edad > 0 && ingresos > 1000 ){
    if (edad > 16 && ingresos >=1000 ){
        alert("Debe tributar");
    }else{
        alert("No debe tributar");
    }
}else{
    alert("Los valores no son Validos");
}
