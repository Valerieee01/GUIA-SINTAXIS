
const frase = prompt("Introduce una frase:");
const letra = prompt("Introduce una letra:").toLowerCase();

function calcularVecesDeUnaLetra(frase, letra) {
    let vecesLetra = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra) {
            vecesLetra++;
        }
    }
    return vecesLetra;
}
let resultado = calcularVecesDeUnaLetra(frase, letra); 
alert(`La letra ${letra} aparece ${resultado} veces en la frase`);