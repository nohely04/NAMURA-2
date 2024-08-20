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

    validarButton.addEventListener('click', () => {
        
        // Campos y errores
        const nombreInput = document.getElementById('Inputnombre');
        const emailInput = document.getElementById('InputEmail');
        const fechaInput = document.getElementById('InputFecha');
        const seleccionarCat = document.getElementById('categoria');
        const radioboton = document.getElementsByName('inlineRadioOptions');
        const comentarioInput = document.getElementById('inputComentario');
        const errorEmail = document.getElementById('error1');
        const errorNombre = document.getElementById('error2');
        const errorFecha = document.getElementById('error3');
        const errorCategoria = document.getElementById('error5');
        const errorRadio = document.getElementById('error4');
        const errorComentario = document.getElementById('error6');

        // Limpiar estados de error
        [errorNombre, errorEmail, errorFecha, errorCategoria, errorComentario].forEach(error => {
            error.style.display = 'none';
        });

        let encotrarError = false;

        // Validación del nombre
        const nombreValue = nombreInput.value.trim();
        if (nombreValue === '') {
            errorNombre.textContent = "El campo del nombre es obligatorio";
            errorNombre.style.display = 'inline';
            encotrarError = true;
        } else if (/\d/.test(nombreValue)) {
            errorNombre.textContent = "En el campo nombre no se pueden digitar números";
            errorNombre.style.display = 'inline';
            encotrarError = true;
        }

        // Validación del correo electrónico
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            errorEmail.textContent = "El campo de correo electrónico es obligatorio.";
            errorEmail.style.display = 'inline';
            encotrarError = true;
        } else if (!emailRegex.test(emailValue)) {
            errorEmail.textContent = "El correo electrónico no es válido.";
            errorEmail.style.display = 'inline';
            encotrarError = true;
        }

        // Validación de la fecha
        const fechaValue = fechaInput.value;
        if (fechaValue === '') {
            errorFecha.textContent = "El campo de fecha de nacimiento es obligatorio.";
            errorFecha.style.display = 'inline';
            encotrarError = true;
        } else if (!validarEdad(fechaValue)) {
            errorFecha.textContent = "Debes tener entre 18 y 100 años.";
            errorFecha.style.display = 'inline';
            encotrarError = true;
        }

         // Validación de los botones de radio
         const radioSeleccionado = Array.from(radioboton).some(radio => radio.checked);
         if (!radioSeleccionado) {
             errorRadio.textContent = "Debes seleccionar una opción.";
             errorRadio.style.display = 'inline';
             encotrarError = true;
         }
 

        // Validación del combo box
          
        const categoriaValue = seleccionarCat.value;
        if (categoriaValue === '') {
            errorCategoria.textContent = "Debes seleccionar una opción.";
            errorCategoria.style.display = 'inline';
            encotrarError = true;
        }

        // Validación del comentario
        const comentarioValue = comentarioInput.value.trim();
        if (comentarioValue === '') {
            errorComentario.textContent = "El campo del comentario es obligatorio";
            errorComentario.style.display = 'inline';
            encotrarError = true;
        }

        if (!encotrarError) {
        //    alert("¡Formulario enviado con exito!")
        Swal.fire({
            icon: 'success',
            text: '¡Formulario enviado con éxito!',
            confirmButtonColor: '#dd7888',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonText: 'Cerrar'
        }).then(() => {
            nombreInput.value = '';
            emailInput.value = '';
            fechaInput.value = '';
            seleccionarCat.value = '';
            comentarioInput.value = '';
            // Desmarcar todos los botones de radio
            radioboton.forEach(radio => radio.checked = false);
            document.getElementById('Check').checked = false;
        });
        } 
    });

    

    // Función para validar la edad
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


