
let nota = [];
let notaAlumno = 1;

while (notaAlumno >= 1) {
    notaAlumno = parseFloat(prompt("Ingrese la nota (si desea terminar escriba -1): "))
    nota.push(notaAlumno);
}

function calcularCantidadAumnosPorNota(...nota) {
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    for (let i = 0; i < nota.length; i++) {
        if(nota[i] >= 100 && nota[i] <= 100){
            a+=1;
        }
        else if(nota[i] < 90 && nota[i] >= 80){
            b+=1;
        }
        else if(nota[i] < 80 && nota[i] >= 70){
            c+=1;
        }
        else{
            d+=1;
        }
    }
    alert(`
    El total de alumnos con notas A, B, C son:
    A: ${a}
    B: ${b} 
    C: ${c} 
    D: ${d}`)
}

function calcularMayor(...nota) {
    let mayor = nota[0]
    for (let j = 0; j < nota.length; j++) {
            if (nota[j] > mayor) {
                mayor = nota[j];
            }
    }
    alert(`La nota mayor ingresada es: ${mayor}`);
}

function calcularMenor(...nota) {
    let menor = nota[0]
    for (let j = 0; j < nota.length; j++) {
            if (nota[j] < menor) {
                menor = nota[j];
            }
    }
    alert(`La nota menor ingresada es: ${menor}`);
}

calcularCantidadAumnosPorNota(...nota);
calcularMayor(...nota);
calcularMenor(...nota);