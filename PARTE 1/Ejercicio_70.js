let contarsenaInicial = prompt("Cree la contraseña")
let confirmacionContrasena = " ";
let valiodarContrasena = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_]).{8,16}$/;

if (valiodarContrasena.test(contarsenaInicial)) {
    while (contarsenaInicial !== confirmacionContrasena) {
        let confirmacionContrasena = prompt("Ingrese confirmación de su contraseña")
        if(confirmacionContrasena === contarsenaInicial){
            alert(" Felixcitaciones, confirmaste tu contraseña")
            break
        }
        else{
            alert("Upps, intenta nuevamente tienes varios errores")
        }
    }
} else {
    alert("La contraseña no cumple con los requisitos para ser una")
}

// ^: Indica el inicio de la cadena.
// (?=.*[A-Za-z]): Asegura que haya al menos una letra (mayúscula o minúscula).
// (?=.*\d): Asegura que haya al menos un dígito (número).
// (?=.*[\W_]): Asegura que haya al menos un carácter especial. \W incluye cualquier carácter que no sea alfanumérico, y _ incluye el guion bajo como carácter especial.
// .{8,16}: Asegura que la longitud de la contraseña esté entre 8 y 16 caracteres.
// $: Indica el final de la cadena.