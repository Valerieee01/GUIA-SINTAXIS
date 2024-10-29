function edadMadre(a,b) {
    let edadMama = a - b;
    return edadMadre;
}

let fechaNacimientoHijo = parseInt(prompt("Fecha de nacimiento de tu hijo: "));;
let fechaNacimientoMama= parseInt(prompt("Fecha de nacimiente de ti: "));
alert(`La edad de la madre es : ${edadMadre(fechaNacimientoMama,fechaNacimientoHijo)}`)