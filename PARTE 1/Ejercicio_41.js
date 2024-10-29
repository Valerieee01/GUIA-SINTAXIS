
const InvertirFraseProgramador = function (frase) {
    let fraseInvertida = frase.split("").reverse().join("");
    return fraseInvertida;
}


let fraseProgramador = prompt("Ingresa una frase que te indentifique como programador: ") 
alert(`La frase que te indentifica invertida es:
    ${InvertirFraseProgramador(fraseProgramador)}`);
