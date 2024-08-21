
document.getElementById('fetchButton').addEventListener('click', function (event) {
    event.preventDefault();

    const bin = document.getElementById('binInput').value;

    if (bin.length === 16) {
        const num = bin.substring(0, 6);
        const url = `https://data.handyapi.com/bin/${num}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let logo = '';
                if (data.Scheme.toLowerCase() === 'visa') {
                    logo = '<img src="./img/visa.png" alt="Visa"/>';
                    localStorage.setItem('tarjeta', 'Visa');
                } else if (data.Scheme.toLowerCase() === 'mastercard') {
                    logo = '<img src="./img/mastercard.png" alt="MasterCard"/>';
                    localStorage.setItem('tarjeta', 'Mastercard');
                }

                let tipoTarjeta = '';
                if (data.Type === 'DEBIT') {
                    tipoTarjeta = 'DÉBITO';
                } else {
                    tipoTarjeta = 'CRÉDITO';
                }

                document.getElementById('result').innerHTML = `
                    <p class="title"></p><p>${data.Scheme} ${tipoTarjeta} ${logo}</p>
                `;

                // Activar los campos de fecha de vencimiento y CVV
                document.getElementById('nombreTitular').disabled = false;
                document.getElementById('fechaVencimiento').disabled = false;
                document.getElementById('codigoCVV').disabled = false;
                document.getElementById('submitButton').disabled = false;

                // Agregar atributos required dinámicamente
                document.getElementById('fechaVencimiento').setAttribute('required', 'required');
                document.getElementById('codigoCVV').setAttribute('required', 'required');
            })
            .catch(error => {
                document.getElementById('result').innerHTML = `<p>El número de tarjeta no es válido.</p>`;
            });
    } else {
        alert('El número de tarjeta debe tener exactamente 16 dígitos.');
    }
});

document.getElementById('codigoCVV').addEventListener('input', function () {
    const cvv = this.value;
    const cvvError = document.getElementById('errorCVV');
    const regexCVV = /^\d{3,4}$/;
    if (!regexCVV.test(cvv)) {
        cvvError.style.display = 'block';
    } else {
        cvvError.style.display = 'none';
    }
});

document.getElementById('fechaVencimiento').addEventListener('input', function () {
    const errorVencimiento = document.getElementById('errorVencimiento');
    let fecha = this.value;

    // Formatear fecha con barra inclinada
    fecha = fecha.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (fecha.length > 2) {
        fecha = fecha.slice(0, 2) + '/' + fecha.slice(2);
    }
    if (fecha.length > 7) {
        fecha = fecha.slice(0, 7); // Limitar a MM/AAAA
    }
    this.value = fecha;

    const regexFecha = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const fechaActual = new Date();
    const [mes, anio] = fecha.split('/');
    const fechaIngreso = new Date(anio, mes - 1);

    if (!regexFecha.test(fecha) || fechaIngreso <= fechaActual) {
        errorVencimiento.style.display = 'block';
    } else {
        errorVencimiento.style.display = 'none';
    }
});

document.getElementById('nombreTitular').addEventListener('input', function () {
    const nombre = this.value;
    const errorNombre = document.getElementById('errorNombre');
    const regexNombre = /^[a-zA-Z\s]{3,}$/;

    if (!regexNombre.test(nombre)) {
        errorNombre.style.display = 'block';
    } else {
        errorNombre.style.display = 'none';
    }
});

//VALIDA LOS BOTONES DE ENVIO, REALIZA LA SIMULACIÓN DE ENVIO Y HACE QUE NO SALTE EL MENSAJE DE
//ERROR EN EL BOTON DE REDIRECCIONAR
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    const radios = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const errorEnvio = document.getElementById('errorEnvio');
    const submitButton = document.getElementById('submitButton');
    const redireccionarButton = document.getElementById('factu');

    // Función de validación
    function validarFormulario() {
        const radioSeleccionado = Array.from(radios).some(radio => radio.checked);
        if (!radioSeleccionado) {
            errorEnvio.textContent = "Debes seleccionar una opción.";
            errorEnvio.style.display = 'inline';
            return false; // Evita el envío del formulario
        } else {
            errorEnvio.style.display = 'none';
            return true; // Permite el envío del formulario
        }
    }
    function anular(){
        Swal.fire({
            icon: 'warning',
            title: 'Error',
            text: 'No se puede permitir el pago sin productos agregados',
            showConfirmButton: false,
            timer: 2000
                });
    }

    // Escucha el envío del formulario
    formulario.addEventListener('submit', function (event) {
        // Prevenir el envío por defecto solo si el botón de pagar fue presionado
        if (event.submitter === submitButton) {
            event.preventDefault();
            let verificar = JSON.parse(localStorage.getItem('productos')) || [];
            if(verificar.length == 0){
                anular();
                limpiarFormulario();
                limpiarTabla('detalle');
            }else{
            // Valida el formulario
            if (validarFormulario()) {
                // Si la validación es exitosa, simula el pago
                Swal.fire({
                    icon: 'success',
                    title: '¡Pago realizado con éxito!',
                    text: 'Gracias por tu compra.',
                    confirmButtonColor: '#dd7888',
                    timer: 10000,
                    timerProgressBar: true,
                    showConfirmButton: true,
                    confirmButtonText: 'Cerrar'
                }).then(() => {
                    // Limpia el formulario
                    limpiarFormulario();

                    // Limpia la tabla 
                    limpiarTabla('detalle');
                    
                    //Activa el botón de factura
                    document.getElementById('factu').disabled = false;
                    //desactiva los botones de envio para que no haya errores
                    document.getElementById('expressOrotina').disabled = true;
                    document.getElementById('express').disabled = true;
                    document.getElementById('tienda').disabled = true;
                    redireccionar() 
                });
            }
        }
    }
    });

    // Evita la validación y el envío del formulario al hacer clic en el botón de redirección
    redireccionarButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita que salte el mensaje de rror
        redireccionar(); 
    });
});

function redireccionar() {
    window.location.href = 'factura.html';
}

// Función para limpiar el formulario
function limpiarFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.reset(); // Resetea todos los campos del formulario
    document.getElementById('nombreTitular').disabled = true;
    document.getElementById('fechaVencimiento').disabled = true;
    document.getElementById('codigoCVV').disabled = true;
    document.getElementById('submitButton').disabled = true;
    document.getElementById('result').innerHTML = '';
    document.getElementById('errorEnvio').style.display = 'none';
}

//LIMPIAR TABLA CUANDO SE LE DA PAGAR
function limpiarTabla(idTabla) {
    const tabla = document.getElementById(idTabla).getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    // Reinicia el total a 0
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = '0';
    }

    // Reinicia el extra a 0
    const extra = document.getElementById('extra');
    if (extra) {
        extra.textContent = '0';
    }
}

function obtenerNombre() {
    var nombre = document.getElementById('nombreTitular').value;
    localStorage.setItem('Nombre', nombre);
    
    

}


//SUMAR EL ENVIO EXPRESS 
const expre = document.querySelectorAll('input[name="inlineRadioOptions"]');

function expressSuma(event) {

    const seleccionado = event.target.value
    let costo = parseFloat(localStorage.getItem('total'));
    var total;
    var extra;
    if (seleccionado === "Express") {
        costo
        extra = 2000;
        total = costo + extra;


    } else {
        extra = 0;
        total = costo + extra;

    }
    localStorage.setItem('total', total);
    // Actualizar el total de la compra incluyendo el costo de envío
    $('#extra').text("₡" + extra);

}
expre.forEach(leer => {
    leer.addEventListener('change', expressSuma);
});

//GUARDAR EL TIPO DE ENVIO

const radios = document.querySelectorAll('input[name="inlineRadioOptions"]');

// Función para manejar el cambio de los radios
function guardarEnvio(event) {
    // Obtener el valor del radio seleccionado
    const valor = event.target.value;
    // Guardar en localStorage
    localStorage.setItem('opcionEnvio', valor);
}

// Agregar evento de cambio a cada radio
radios.forEach(radio => {
    radio.addEventListener('change', guardarEnvio);
});