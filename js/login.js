const validarFormulario = ()=>{ 
    let usuario = document.querySelector('#usuario').value; 
    let password = document.querySelector('#password').value; 

 
    let errores = []; 
 
    if(usuario === ""){ 
        errores.push("El usuario es obligatorio"); 
    } 
 

    if(password.length<6){ 
        errores.push("La longitud de la contraseña no es válida") 
    } 
 

    if(errores.length>0){ 
        mostrarErrores(errores); 
        return false; 
    } 
    return true; 
} 
 

const validarPassword = () =>{ 
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; 
    return regexPassword.test(password); 
} 
 
const mostrarErrores = (errores) => { 
    let mensaje = ""; 
    for(let i=0; i<errores.length; i++){ 
        mensaje += "*" + errores[i]+ "\n" 
    } 
    alert(mensaje); 
}