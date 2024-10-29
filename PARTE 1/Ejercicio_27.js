function Promedio(nota1,nota2,nota3, examen, trabajo) {
     let promedioCalificaciones = (nota1 + nota2 + nota3) / 3;
    return (promedioCalificaciones * 0.55) + (examen * 0.30) + (trabajo * 0.15)
}

let nota1 = prompt("Nota 1: ");
let nota2 = prompt("Nota 2: ");
let nota3 = prompt("Nota 3: ");
let examen = prompt("Nota Examen Final: ");
let trabajo = prompt("Nota Trabajo Final: ");
alert(`El promedio Final del estudiantes es: ${Promedio(nota1,nota2,nota3, examen, trabajo).toFixed(2)}`);
