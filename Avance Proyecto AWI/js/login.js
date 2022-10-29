var nombre = document.getElementById('nombre');
var correo = document.getElementById('clave');
var error = document.getElementById('error');
error.style.color = 'red'; 

var from = document.getElementById('formulario');


from.addEventListener('submit', function(e) {
    e.preventDefault();
    var mensajeerror = [];

    if (nombre.value === null || nombre.value === '') {
        mensajeerror.push('Ingresa tu nombre')
    }

    if (correo.value === null || correo.value === '') {
        mensajeerror.push('Ingrese tu correo')
    }

    error.innerHTML = mensajeerror.join(', ');
})

function limpiarFormulario() {
    document.getElementById("formulario").reset();
    error.reset();
  }