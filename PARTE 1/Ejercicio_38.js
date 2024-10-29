
function CalcularTapasLaura(nTapas) {
    let canTapas = nTapas;
    let tapasMartin =  nTapas * 0.66;
    console.log(tapasMartin);
    let tapasJairo = nTapas * 0.25;
    console.log(tapasJairo);
    let tapasLorena = (tapasMartin + tapasJairo) ;
    console.log(tapasLorena)
    return alert(`La cantidad de tapas que tiene Laura: 
    ${tapasLorena}`);
}

let ntapas = parseFloat(prompt("Ingrese la cantidad de tapas: "));
CalcularTapasLaura(ntapas);