
let nombre = prompt("Nombre del empleado:");
let horas = parseFloat(prompt("Horas trabajadas: "));
let salario = parseInt(prompt("Salario por hora"));
let total= salario * horas;
alert(`El salario de ${nombre} es de: ${total}`);
