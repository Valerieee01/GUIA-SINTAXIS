let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

if(num1 == num2 && num2 == num3){
    alert("SON IGUALES")
}
else{
    let mayor = Math.min(num1, num2, num3);
    alert(`EL NUMERO MENOR ES ${mayor}`);
}