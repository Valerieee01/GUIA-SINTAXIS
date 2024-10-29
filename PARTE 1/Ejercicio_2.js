
let user = prompt("Ingrese su usuario: ");
let password = prompt("Ingrese la nueva contraseña: (SOLO DATOS ALFANUMERICOS)");

const verificar = /^[a-zA-Z0-9]*$/.test(password);
if(verificar){
    let confirmPassword = prompt("Confirme la contraseña: ");
    if (confirmPassword.toLowerCase() === password.toLowerCase()){
        alert("la contraseña Coincide, guadado exitosamente");
    }else{
        alert("La contraseña es incorrecta, no se pudo gueardar la contraseña")
    }
}else{
    alert("La contraseña solo puede contener caracteres alfanuméricos.");
}
