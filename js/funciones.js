var floatingInputName = document.getElementById('floatingInputName');
var floatingInputEmail = document.getElementById('floatingInputEmail');
var floatingInputcumpleaños = document.getElementById('floatingInputcumpleaños');
var floatingPassword = document.getElementById('floatingPassword');
error.style.color = 'red';

var form = document.getElementById('formulario');
    form.addEventListener('Submit',function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if (floatingInputName.value === null || floatingInputName.value ===''){
                mensajesError.push("Ingresa tu nombre");
        }
        if (floatingInputEmail.value === null || floatingInputEmail.value === ''){
               mensajesError.push("Ingresa tu E-mail");
           }
           if (floatingInputcumpleaños.value === null || floatingInputcumpleaños.value === ''){
               mensajesError.push("Ingresa tu Fecha de Nacimiento");
           }
           if (floatingPassword.value == null || floatingPassword.value === ''){
               mensajesError.push("Ingresa tu Contraseña");
           }
           error.innerHTML = mensajesError.join(', ');
    });
