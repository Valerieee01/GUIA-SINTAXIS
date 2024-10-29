function volumenElipsoide(a,b,c) {
    volumen = (4/3) * Math.PI * a * b * c;
    return volumen;
}

let a = parseInt(prompt("Ingrese el valor de a: "));
let b = parseInt(prompt("Ingrese el valor de b: "));
let c = parseInt(prompt("Ingrese el valor de c: "));
alert(`El volumen del elipsoide es de: ${volumenElipsoide(a,b,c)} `);