while (true) {
     let cargo = parseInt(prompt(`Ingrese su cargo: 
        1. Planta
        2. Administrativo`));
    let Horas_trabajadas = parseFloat(prompt("Ingrese las horas trabajadas: "));
    if (cargo === 1) {
        let PrecioHora = 20000;
        let total = Horas_trabajadas*PrecioHora;
        alert(`El pago total para este trabajador de planta es de: ${total.toFixed(2)}`)        
    }else if (cargo === 2){
        let PrecioHora = 10000;
        let total = Horas_trabajadas*PrecioHora;
        alert(`El pago total para este trabajador de planta es de: ${total.toFixed(2)}`)
    } 
}
