document.addEventListener('DOMContentLoaded', function() {
let map = L.map('mapa').setView([9.89517, -84.56065],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([9.89517, -84.56065]).addTo(map)
});



//Llenar combo box
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('categoria');
    const prod = productos.categoria
function Categorias(products) {
    // Extraer categorías únicas
    const categories = new Set(products.map(product => product.categoria));

    // Limpiar el combo box
    selectElement.innerHTML = '<option value="">Selecciona una categoría</option>';

    // Agregar opciones al combo box
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectElement.appendChild(option);
    });
}

// Llamar a la función para llenar el combo box
Categorias(productos);
});

//validaciones nombre
document.addEventListener('DOMContentLoaded', () => {
    const validarButton = document.getElementById('boton');
    const input = document.getElementById('Inputnombre');
    const error = document.getElementById('error1'); // Definir la variable 'error'

    validarButton.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor del campo de texto
        const value = input.value.trim();

        // Validar el campo de texto
        if (value === '') {
            // Campo vacío
            error.textContent = "El campo del nombre es obligatorio";
            error.style.display = 'inline'; // Mostrar mensaje de error
        } else if (/\d/.test(value)) {
            // Campo contiene números
            error.textContent = "En el campo nombre no se pueden digitar números";
            error.style.display = 'inline'; // Mostrar mensaje de error
        } 
    });
});

//validación correo
document.addEventListener('DOMContentLoaded', () => {
    const validar = document.getElementById('boton');
    const emailInput = document.getElementById('InputEmail');
    const error = document.getElementById('error2');

    // Expresión regular para validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    validar.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor del campo de texto
        const email = emailInput.value.trim();

        // Validar el campo de correo electrónico
        if (email === '') {
            // Campo vacío
            error.textContent = "El campo de correo electrónico es obligatorio.";
            error.style.display = 'inline';
        } else if (!emailRegex.test(email)) {
            // Campo no contiene un formato de correo electrónico válido
            error.textContent = "El correo electrónico no es válido.";
            error.style.display = 'inline';
        }
    });
});

//validación fecha
document.addEventListener('DOMContentLoaded', () => {
    const validar = document.getElementById('boton');
    const fechaInput = document.getElementById('InputFecha');
    const error = document.getElementById('error3');

    validar.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor del campo de fecha
        const fecha = fechaInput.value;

        // Validar la fecha
        if (fecha === '') {
            // Campo vacío
            error.textContent = "El campo de fecha de nacimiento es obligatorio.";
            error.style.display = 'inline';
        } else if (!validarEdad(fecha)) {
            // Edad no válida
            error.textContent = "Debes tener entre 18 y 100 años.";
            error.style.display = 'inline';
        }
    });

    function validarEdad(fecha) {
        const hoy = new Date();
        const fechaNacimiento = new Date(fecha);
        
        // Calcular la edad
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();

        // Ajustar si el cumpleaños aún no ha pasado este año
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        return edad >= 18 && edad <= 100;
    }
});

//validacion botones
document.addEventListener('DOMContentLoaded', () => {
    const validarBoton = document.getElementById('boton');
    const select = document.getElementById('categoria');
    const error = document.getElementById('error4');

    validarBoton.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor seleccionado del combo box
        const valorSeleccionado = select.value;

        if (valorSeleccionado === '') {
            // No se seleccionó una opción válida
            error.textContent = "Debes seleccionar una opción.";
            error.style.display = 'inline';
        } 
    });
});
//validar combo
document.addEventListener('DOMContentLoaded', () => {
    const validar = document.getElementById('boton');
    const select = document.getElementById('categoria');
    const error = document.getElementById('error5');

    validar.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor seleccionado del combo box
        const valorSeleccionado = select.value;

        if (valorSeleccionado === '') {
            // No se seleccionó una opción válida
            error.textContent = "Debes seleccionar una opción.";
            error.style.display = 'inline';
        }
    });
});
//validaciones comentario
document.addEventListener('DOMContentLoaded', () => {
    const validarButton = document.getElementById('boton');
    const input = document.getElementById('inputComentario');
    const error = document.getElementById('error6'); // Definir la variable 'error'

    validarButton.addEventListener('click', () => {
        // Limpiar el estado de error
        error.style.display = 'none';

        // Obtener el valor del campo de texto
        const value = input.value.trim();

        // Validar el campo de texto
        if (value === '') {
            // Campo vacío
            error.textContent = "El campo del comentario es obligatorio";
            error.style.display = 'inline'; // Mostrar mensaje de error
        }
    });
});

//borrar y mandar msj
document.addEventListener('DOMContentLoaded', () => {
        const comboBox = document.getElementById('categoria');
        const radioButtons = document.getElementsByName('inlineRadioOptions');
        const checkBox = document.getElementById('Check');
        const borrar = document.getElementById('boton');
        const email = document.getElementById('InputEmail');
        const name = document.getElementById('Inputnombre');
        const fecha = document.getElementById('InputFecha');
        const comentario = document.getElementById('inputComentario');

        alert('Enviado');
        // Añade un evento al botón para borrar los datos
        alert.addEventListener('Aceptar', function() {
            
            // Borra la selección del combo box
            comboBox.selectedIndex = 0;

            // Desmarca todos los radio buttons
            radioButtons.forEach(radio => radio.checked = false);

            // Desmarca el checkbox
            checkBox.checked = false;
            email.value = '';
            name.value = '';
            comentario.value = '';
            fecha.value = '';
        });
    });