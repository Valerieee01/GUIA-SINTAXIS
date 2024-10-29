let contraseña = prompt("Crea una contraseña segura:  ")
let Validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,12}$/
if(Validar.test(contraseña)){
    alert("Esta contraseña es valida")
}
else{
    alert("Esta contraseña no es valida, no cumple con las normas de seguridad")
}