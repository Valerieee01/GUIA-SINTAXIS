let validarComillas = /"(?:[^"\\]*(?:\\.[^"\\]*)*)"|'(?:[^'\\]*(?:\\.[^'\\]*)*)'/;
let fraseValidar;
while (true) {
   fraseValidar = prompt("Ingrese una frase (Este programa valida si tu frase tiene o no comillas): ")
    if(validarComillas.test(fraseValidar)){
        alert("Esta frase incluye comillas");
        break;
    }
    else{
        alert("Esta frase no incluiye comillas, intente nuevamente")
    }
}
