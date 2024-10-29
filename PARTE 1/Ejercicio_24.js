let numero = parseFloat(prompt("ingrese el número para saber si tiene punto flotante: "))
let validar = /[0-9,]+[^.]/;

if (validar.test(numero)){
    alert("Es un flotante");
}
else{
    alert("No es un flotante");
}

