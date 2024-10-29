

let CalcularEdadPersona = (anioNacimiento, anioActual) => anioActual - anioNacimiento;


const ANIO_ACTUAL = 2024;
let anioNacimientoPersona = parseFloat(prompt("Ingrese el año de nacimiento: "));
alert(`La eddad de la persona es de: ${CalcularEdadPersona(anioNacimientoPersona, ANIO_ACTUAL)}`);
