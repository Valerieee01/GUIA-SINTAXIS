
while (true) {
    let temperatura = parseFloat(prompt("Ingrese la Temperatura: "));
    let presion = parseFloat(prompt("Ingrese la presion: "));
 
    if(presion > 200 || temperatura > 100){
        alert(`Ten cuidado, ALARMA`);
    }
    else{
        alert(`Nada de que preocuparse, NORMAL`);
    }
}