
function ecoPalabra() {
    while (true) {
        let palabra = prompt("Ingresa una palabras (escribe salir para terminar el programa):").toUpperCase();
        if(palabra === "SALIR"){
            break
        }else{
            alert(palabra);
        }
    }
}

ecoPalabra();