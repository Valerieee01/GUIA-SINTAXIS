let palabra = prompt("Ingrese una palabra o frase: ");

const silabas =  (palabra ) => {
    const regext = /([aeiou])/gi;
    const cantidad = palabra.match(regext);
    console.log(cantidad);
}

silabas(palabra);