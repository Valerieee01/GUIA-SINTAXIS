let nombre, edad,altura,peso;
let entraronAlEquipo = [];
 nombre = "0";
while (nombre !== "salir") {
    nombre = prompt("Ingrese el nombre: ");
    edad = parseInt(prompt("Ingrese la edad: "));
    altura = parseFloat(prompt("Ingrese la altura: "));
    peso = parseFloat(prompt("Ingrese el peso: "));   
    if(edad <= 19 && altura >= 175 && peso <= 80 && peso >= 75){
        alert("Cumple los Requisitos, puedes participar en el equipo.");
        entraronAlEquipo.push(nombre);
    }
    else{
        alert("No cumple los requisitos, lo siendo intenta el suguiente año.");
    }

    for (let i = 0; i < entraronAlEquipo.length; i++) {
        const element = array[i];
        console.log(`Si entro al equipo: ${element}`);
    }
}

