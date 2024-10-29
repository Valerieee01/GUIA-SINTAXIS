
while (true){
    let numero = parseFloat(prompt("Ingresa un número: "))
    if(numero >= 0 && numero <= 100){
        alert(`El numero ${numero} es positivo y menor a 100`);
        break;
    } else if (numero < 0 ){
        alert(`El numero ${numero} es negativo`)
        break;
    } else{
        alert("Vuelve a ingresar el numero, no pudimos identirficar a que grupo pertenece")
    }
}