nombre = prompt("Ingrese el nombre del estudiante:  ");
sexo = prompt("Ingrese el género (F -> Femenino, M -> Masculino): ");
let letraInicial = nombre.toLowerCase().charAt(0);
if(sexo.toLowerCase() == "f" || sexo.toLowerCase() == "m"){
    
    if((letraInicial <= "m" && sexo == "f") || (letraInicial >= "n" && sexo == "m")){
        alert("Este estudiante pertenece al grupo: A");
    }else{
        alert("Este estudiante pertenece al grupo: B")
    }
}else {
    alert("Escribiste una opcion de genero invalida")
}