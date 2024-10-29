let Resultado;
try {
    let num1 =parseInt(prompt("Ingrese el dividendo: "));
    let num2 = parseInt(prompt("Ingrese el divisor: "));
    Resultado = num1/num2;
    if (num2 === 0){
        throw new Error("Error El divisor no puede ser 0");   
    }
    alert(`Resultado: ${Resultado}`);
} catch (e) {
    alert("Error divisor invalido, Intente nuevamente");
}