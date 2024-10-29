
let radio = parseInt(prompt("Ingrese el radio del cilindro: "));
let Altura= parseInt(prompt("Ingrese la altura del cilindro: "));

function AreaCilindro(radio, Altura) {
    return 2 * Math.PI * radio * Altura + 2 * Math.PI * Math.pow(radio,2);
}

function volumenCilindro(radio, Altura) {
    return Math.PI * Math.pow(radio, 2) * Altura;
}


alert(`Area cilindro: ${AreaCilindro(radio,Altura)}
    Volumen del cilindro: ${volumenCilindro(radio, Altura)}`);