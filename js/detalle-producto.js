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


// Obtener el ID del producto desde la URL
const url = new URLSearchParams(window.location.search);
const productoId = parseInt(url.get("id"));

// Buscar el producto correspondiente
const producto = productos.find(p => p._id === productoId);

// Función para actualizar el estado del "me gusta" en el localStorage
function actualizarEstadoMeGusta(productoId, reseñaId, estado) {
    localStorage.setItem(`meGusta-${productoId}-${reseñaId}`, estado);
}

// Función para obtener el estado del "me gusta" desde el localStorage
function obtenerEstadoMeGusta(productoId, reseñaId) {
    return localStorage.getItem(`meGusta-${productoId}-${reseñaId}`);
}

// Función para inicializar el estado del "me gusta" al cargar la página
function inicializarMeGusta(productoId, reseñaId) {
    const heartIcon = document.getElementById(`heart-icon-${reseñaId}`);
    const estado = obtenerEstadoMeGusta(productoId, reseñaId);

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
function darMeGusta(productoId, reseñaId) {
    const heartIcon = document.getElementById(`heart-icon-${reseñaId}`);
    const estado = obtenerEstadoMeGusta(productoId, reseñaId);

    if (estado === 'true') {
        // Quitar "me gusta"
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
        heartIcon.style.color = 'black';
        actualizarEstadoMeGusta(productoId, reseñaId, 'false');
    } else {
        // Dar "me gusta"
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
        heartIcon.style.color = 'red';
        actualizarEstadoMeGusta(productoId, reseñaId, 'true');
    }
}

// Inicializar reseñas y el estado de "me gusta"
document.addEventListener('DOMContentLoaded', () => {
    if (producto && producto.reseñas_usuarios) {
        const reseñasContainer = document.querySelector('.reseñas .row');
        reseñasContainer.innerHTML = ''; // Limpiar el contenido previo

        producto.reseñas_usuarios.forEach(reseña => {
            // Crear las tarjetas de reseñas
            const reseñaCard = document.createElement('div');
            reseñaCard.classList.add('col-sm-6', 'mb-3', 'mb-sm-0');
            reseñaCard.innerHTML = `
                <div class="card" id="cuadros">
                    <div class="card-body">
                        <p class="card-text" id="comentario${reseña.id}">${reseña.comentario}</p>
                        <p class="card-text" id="usuario${reseña.id}">${reseña.usuario}</p>
                        <div class="d-flex justify-content-center align-items-center">
                            <div>
                                <i class="bi bi-heart" id="heart-icon-${reseña.id}" onclick="darMeGusta(${productoId}, ${reseña.id})" style="font-size: 24px; cursor: pointer;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            reseñasContainer.appendChild(reseñaCard);
            inicializarMeGusta(productoId, reseña.id);
        });
    }
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

document.addEventListener('DOMContentLoaded', function() {
    const cant = document.getElementById('cantidad');

    cant.addEventListener('input', function() {
        // Eliminar cualquier carácter que no sea un dígito
        this.value = this.value.replace(/[^0-9]/g, '');

        // Convertir a número entero
        let cantidad = parseInt(this.value);

        // Valida si la cantidad es menor a 1 o si es NaN (Not-a-Number)
        if (isNaN(cantidad) || cantidad < 1) {
            // Si es NaN o menor que 1, establece el valor en 1
            this.value = 1;
        }
    });
});