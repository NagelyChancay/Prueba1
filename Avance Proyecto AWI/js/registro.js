//variables
const nombres = document.getElementById("nombre");
const apellido= document.getElementById("apellidos");
const correo = document.getElementById("correo");
const clave1 = document.getElementById("contrasena");
const clave2 = document.getElementById("rep_contrasena");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const formulario = document.getElementById("form");
const listInsputs = document.querySelectorAll(".form-input");

//validar formulario
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validaciondatos();
    if(condicion){
        enviarFormulario();
    }
});

//funciones
function validaciondatos() {
    formulario.lastElementChild.innerHTML = "";
    let condicion = true;
    listInsputs.forEach(element => {
        element.lastElementChild.innerHTML= "";
    });
//condiciones
    if(nombres.value.lenght < 1 || nombres.value.trim() == "") {
        muestraError("nombre", "Nombres no válidos*");
        condicion = false; 
    }

    if(apellido.value.lenght < 1 || apellido.value.trim() == "") {
        muestraError("apellidos", "Apellidos no válidos*");
        condicion = false; 
    }

    if(correo.value.lenght < 1 || correo.value.trim() == "") {
        muestraError("correo", "Correo electrónico no válido*");
        condicion = false; 
    }

    if(clave1.value.lenght < 1 || clave1.value.trim() == "") {
        muestraError("contrasena", "Contraseña no válida*");
        condicion = false; 
    }

    if(clave2.value != clave1.value) {
        muestraError("rep_contrasena", "Las Contraseñas no coinciden*");
        condicion = false; 
    }

    if(telefono.value.lenght < 10 || telefono.value.trim() == "" || isNaN(telefono.value)) {
        muestraError("telefono", "Teléfono no válido*");
        condicion = false; 
    }
    if(direccion.value.lenght < 1 || direccion.value.trim() == "") {
        muestraError("direccion", "Direccion no válida");
        condicion = false; 
    }
    return condicion;
}
//funcion error
function muestraError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}
//funcion vaciar
function enviarFormulario(){
    formulario.reset();
    formulario.lastElementChild.innerHTML = "¡Gracias por su Registro!";
}