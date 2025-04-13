// file js/contacto.js

//carga de la funcion init
window.addEventListener('load', init, false);

//funcion inicial
function init() {
    //declaracion de elementos del DOM
    let nombreInput = document.getElementById('nombreTxt');
    let apellidoInput = document.getElementById('apellidoTxt');
    let emailInput = document.getElementById('emailTxt');
    let numeroInput = document.getElementById('numberTxt');
    let mensajeInput = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');

    // Expresiones regulares para validación
    const nombreApellidoRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const telefonoRegex = /^\d{7,14}$/; // De 7 a 14 dígitos numéricos

    // Función para mostrar mensajes de error
    function mostrarError(elemento, mensaje) {
        elemento.textContent = mensaje;
        elemento.style.display = 'block'; // Asegura que el mensaje se muestre
    }

    // Función para ocultar mensajes de error
    function ocultarError(elemento) {
        elemento.textContent = '';
        elemento.style.display = 'none'; // Oculta el mensaje
    }

    // Función para validar el formulario
    function validarFormulario() {
        let valido = true;

        // Validar Nombre
        if (nombreInput.value.trim() === '') {
            mostrarError(document.querySelector('[for="nombreTxt"] + .error-message'), 'El nombre es obligatorio.');
            valido = false;
        } else if (!nombreApellidoRegex.test(nombreInput.value)) {
            mostrarError(document.querySelector('[for="nombreTxt"] + .error-message'), 'El nombre solo puede contener letras y espacios.');
            valido = false;
        } else {
            ocultarError(document.querySelector('[for="nombreTxt"] + .error-message'));
        }

        // Validar Apellido
        if (apellidoInput.value.trim() === '') {
            mostrarError(document.querySelector('[for="apellidoTxt"] + .error-message'), 'El apellido es obligatorio.');
            valido = false;
        } else if (!nombreApellidoRegex.test(apellidoInput.value)) {
            mostrarError(document.querySelector('[for="apellidoTxt"] + .error-message'), 'El apellido solo puede contener letras y espacios.');
            valido = false;
        } else {
            ocultarError(document.querySelector('[for="apellidoTxt"] + .error-message'));
        }

        // Validar Email
        if (emailInput.value.trim() === '') {
            mostrarError(document.querySelector('[for="emailTxt"] + .error-message'), 'El email es obligatorio.');
            valido = false;
        } else if (!emailRegex.test(emailInput.value)) {
            mostrarError(document.querySelector('[for="emailTxt"] + .error-message'), 'Formato de email inválido.');
            valido = false;
        } else {
            ocultarError(document.querySelector('[for="emailTxt"] + .error-message'));
        }

        // Validar Teléfono
        if (numeroInput.value.trim() === '') {
            mostrarError(document.querySelector('[for="numberTxt"] + .error-message'), 'El teléfono es obligatorio.');
            valido = false;
        } else if (!telefonoRegex.test(numeroInput.value)) {
            mostrarError(document.querySelector('[for="numberTxt"] + .error-message'), 'El teléfono debe tener entre 7 y 14 dígitos.');
            valido = false;
        } else {
            ocultarError(document.querySelector('[for="numberTxt"] + .error-message'));
        }

        // Validar Mensaje
        if (mensajeInput.value.trim() === '') {
            mostrarError(document.querySelector('[for="mensajeTxt"] + .error-message'), 'El mensaje es obligatorio.');
            valido = false;
        } else {
            ocultarError(document.querySelector('[for="mensajeTxt"] + .error-message'));
        }

        return valido;
    }

    // Función para limpiar el formulario y los mensajes de error
    function limpiarFormulario() {
        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        numeroInput.value = '';
        mensajeInput.value = '';
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(ocultarError);
        alerta.textContent = '';
        alerta.className = '';
        alerta.style.display = 'none';
    }

    // Evento al hacer clic en el botón Enviar
    btnEnviar.onclick = function(event) {
        event.preventDefault(); // Evitar la recarga de la página

        if (validarFormulario()) {
            emailjs.sendForm('service_cnwy53k', 'template_6lkrpjo', '#form1', '1fB0VUO90CNYDalB6')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        title: '¡Mensaje Enviado!',
                        html: `
                            <b>Nombre:</b> ${nombreInput.value}<br>
                            <b>Apellido:</b> ${apellidoInput.value}<br>
                            <b>Email:</b> ${emailInput.value}<br>
                            <b>Teléfono:</b> ${numeroInput.value}<br>
                            <b>Mensaje:</b> ${mensajeInput.value}<br><br>
                            <b>Estado de la Entrega:</b> El mensaje se ha enviado correctamente.
                        `,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    });
                    limpiarFormulario();
                }, function(error) {
                    console.log('FAILED...', error);
                    Swal.fire({
                        title: '¡Error al Enviar!',
                        text: 'Hubo un problema al enviar su mensaje. Por favor, intente nuevamente.',
                        icon: 'error',
                        confirmButtonText: 'Aceptar'
                    });
                });
        } else {
            Swal.fire({
                title: '¡Error de Validación!',
                text: 'Por favor, corrija los errores en el formulario.',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    // Agregar elementos para mostrar mensajes de error en el HTML
    const formElements = document.querySelectorAll('#form1 label');
    formElements.forEach(label => {
        const errorElement = document.createElement('p');
        errorElement.className = 'error-message';
        label.parentNode.insertBefore(errorElement, label.nextSibling);
    });
}