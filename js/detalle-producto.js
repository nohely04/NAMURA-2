$(document).ready(function(){
    const url = new URLSearchParams(window.location.search);
    const productoId = url.get("id");

    if (productoId) {
        console.log(`Detalles del Producto con ID: ${productoId}`);
        const prod = productos.find((b) => b._id == productoId); 
        if (prod) {
            console.table(prod);
            $("#titulo").text(prod.nombre);
            $("#categoria").html("<b>Categoría: </b>" + prod.categoria);
            $("#precio").html("<b>Precio:</b> &cent;" + prod.precio);
            $("#descripcion").text((prod.descripcion ? prod.descripcion : 'No description'));

            // Mostrar solo el tamaño disponible del producto
            let tamañoTexto = "";
            if (prod.tamaños.Pequeño) {
                tamañoTexto += "Pequeño: " + prod.tamaños.Pequeño + "<br>";
            }
            if (prod.tamaños.Mediano) {
                tamañoTexto += "Mediano: " + prod.tamaños.Mediano + "<br>";
            }
            if (prod.tamaños.Grande) {
                tamañoTexto += "Grande: " + prod.tamaños.Grande;
            }
            if (tamañoTexto === "") {
                tamañoTexto = "Tamaño no especificado o no disponible.";
            }
            $('#tamaño').html("<b>Tamaño:</b><br>" + tamañoTexto);

            $("#tiempo").html("<b>Tiempo de entrega: </b>" + prod.tiempo_entrega);
            $("#opciones").html("<b>Opciones de entrega: </b>" + prod.opcion_entrega);
            $("#stock").html(prod.stock);

            // Actualizar las imágenes del carrusel
            $("#uno").attr("src", prod.galeria_imagenes[0] || "img/image-not-found.jpg");
            $("#dos").attr("src", prod.galeria_imagenes[1] || "img/image-not-found.jpg");
            $("#tres").attr("src", prod.galeria_imagenes[2] || "img/image-not-found.jpg");

            //Recorrer reseñas
            prod.reseñas_usuarios.forEach((reseña, index) => {
                if (index < 2) { 
                    $(`#comentario${index + 1}`).text(reseña.comentario); // Actualiza el comentario
                    $(`#usuario${index + 1}`).html("<b>- " + reseña.usuario + "</b>"); // Actualiza el usuario
                }
            });
        }
    }
});

// Función para actualizar el estado del "me gusta" en el localStorage
function actualizarEstadoMeGusta(numeroReseña, estado) {
    localStorage.setItem(`meGusta-${numeroReseña}`, estado);
}

// Función para obtener el estado del "me gusta" desde el localStorage
function obtenerEstadoMeGusta(numeroReseña) {
    return localStorage.getItem(`meGusta-${numeroReseña}`);
}

// Función para inicializar el estado del "me gusta" al cargar la página
function inicializarMeGusta(numeroReseña) {
    const heartIcon = document.getElementById(`heart-icon-${numeroReseña}`);

    const estado = obtenerEstadoMeGusta(numeroReseña);

    if (estado === 'true') {
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        heartIcon.style.color = 'red';
    } else {
        heartIcon.classList.add('bi-heart');
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.style.color = 'black';
    }
}

// Función para dar o quitar "Me Gusta" a una reseña
function darMeGusta(numeroReseña) {
    const heartIcon = document.getElementById(`heart-icon-${numeroReseña}`);

    const estado = obtenerEstadoMeGusta(numeroReseña);

    if (estado === 'true') {
        // Quitar "me gusta"
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
        heartIcon.style.color = 'black';
        actualizarEstadoMeGusta(numeroReseña, 'false');
    } else {
        // Dar "me gusta"
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        heartIcon.style.color = 'red';
        actualizarEstadoMeGusta(numeroReseña, 'true');
    }
}

// Inicializar el estado de "me gusta" para todas las reseñas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarMeGusta(1);
    inicializarMeGusta(2);
});



document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('cantidad');
    const decrementoBtn = document.getElementById('decremento');
    const incrementoBtn = document.getElementById('incremento');

    // Función para actualizar el estado del botón de decremento
    function updateDecrementButton() {
        let currentValue = parseInt(input.value, 10);
        decrementoBtn.disabled = currentValue <= 1;
    }

    // Deshabilitar el botón de decremento si la cantidad es 1
    updateDecrementButton();

    decrementoBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value, 10);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
        updateDecrementButton();
    });

    incrementoBtn.addEventListener('click', () => {
        let currentValue = parseInt(input.value, 10);
        input.value = currentValue + 1;
        updateDecrementButton();
    });
});









