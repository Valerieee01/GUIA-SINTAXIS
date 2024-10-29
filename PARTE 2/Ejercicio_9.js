
let contrasena = prompt(`Ingrese una contraseña: 
    Requisitos
    1. Solo números
    2. 4 a 6 caracteres `);

validarContrasena(contrasena)

function validarContrasena(contrasena) {
    let validarContrasena =  /^\d{4}$|^\d{6}$/;
   if (validarContrasena.test(contrasena)){
        alert(`Es verdadero`);
   }else {
    alert(`Es Falso`);
   }
}