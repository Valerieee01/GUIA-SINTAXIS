let palabra = prompt("Ingrese una palabra o frase: ");

const evaluarMayor = (palabra) =>  (palabra.length < 5) ? alert(`Es una palabra corta`) : alert(`Es una palabra es larga`) ; 

evaluarMayor(palabra);