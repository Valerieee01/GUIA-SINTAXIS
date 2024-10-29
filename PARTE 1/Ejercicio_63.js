let edad = parseInt(prompt("Ingrese su edad: "));
let anoActual = 2024;
((edad) => {
    let anioDeNacimiento = anoActual - edad;
    for (let i = 1; i <= edad; i++) {
        let anioCumple = anioDeNacimiento + i; 
        alert(`Cumpliste: ${i} en el año ${anioCumple}`);
    }
})(edad);