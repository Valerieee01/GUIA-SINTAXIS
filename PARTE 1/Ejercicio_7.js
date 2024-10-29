function CalcularRenta(renta_anual) {
    if (renta_anual >= 0 && renta_anual < 10000){
        alert("Tu renta anual es de: 0% - No debes declarar");
    }else if (renta_anual >= 10000 && renta_anual < 20000){
        valorRenta = renta_anual.toFixed(2) * 0.05;
        alert(`Tu renta anual es de: 5% ${valorRenta}`);
    } else if(renta_anual >= 20000 && renta_anual < 35000){
        valorRenta = renta_anual.toFixed(2) * 0.1;
        alert(`Tu renta anual es de: 10% ${valorRenta}`);
    }else if(renta_anual >= 35000 && renta_anual < 60000){
        valorRenta = renta_anual.toFixed(2) * 0.2;
        alert(`Tu renta anual es de: 20% ${valorRenta}`);
    }else if(renta_anual >= 60000 ){
        valorRenta = renta_anual.toFixed(2) * 0.45;
        alert(`Tu renta anual es de: 45% ${valorRenta}`);
    }else{
        alert("Valores invalidos");
    }
}

let rentaAnual = parseFloat(prompt("Ingrese la renta anual: "));
CalcularRenta(rentaAnual);