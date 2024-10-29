let ConvertirDolares = (valor) => valor / 4200;
let ConvertirEuros = (valor) => valor / 4700;

let pesosColombianos = parseInt(prompt("Ingrese la cantidad de pesos de desea convertir (pesos colombianos): "))
alert(`El valor en dolares es de: ${ConvertirDolares(pesosColombianos).toFixed(2)} USD
    El valor en Euros es de: ${ConvertirEuros(pesosColombianos).toFixed(2)} EUROS`);
