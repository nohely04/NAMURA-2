$(document).ready(function () {
    mostrarDetalle();
});

function mostrarDetalle() {
    var total=0;
    // Obtiene los datos del carrito desde localStorage
    let cartArray = JSON.parse(localStorage.getItem('productos')) || [];
    console.table(cartArray)

    // Obtiene el tbody de la tabla
    const tbody = document.querySelector('#detalle tbody');
    tbody.innerHTML = ''; // Limpiar el contenido existente

    // Recorre los elementos del carrito y crear filas
    cartArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <button type="button" class="btn eliminar" aria-label="Close" onclick="eliminar(${item.productoId})" > <i class="bi bi-x" id=icon></i></button></td>
        <td><img src="${item.imagen}" alt="imagen" style="width: 100px; height: 100PX; class="img-fluid"></td>
        <td>${item.nombre}</td>
        <td id="precio">&cent${item.pre}</td>
        <td><input type="number" min="1" id="cajaCant" value="${item.cantidad}" onchange="actializar(this)"  data-id="${item.productoId}"</td>
        <td id="subtotal">&cent;${item.subtotal}</td>
        `;
        total += item.subtotal;
        tbody.appendChild(row);
       
    });
    localStorage.setItem('total', total);
    $('#total').text("₡" + total);


}


function eliminar(id) {
    // Obtiene el arreglo del carrito del localStorage
    var cartArray = JSON.parse(localStorage.getItem('productos'));

    // Verifica que el arreglo del carrito exista
    if (cartArray) {
        // Encuenta el índice del producto a eliminar
        let index = cartArray.findIndex((prod) => prod.productoId == id);
        
        // Si se encontró el producto, proceder a mostrar la notificación
        if (index !== -1) {
            // Muestra la notificación de confirmación
            mostrarNotificacionEliminar(id, index, cartArray);
        } else {
            console.error('Producto no encontrado en el carrito.');
        }
    } else {
        console.error('El carrito está vacío o no existe.');
    }
}
function actializar(prod) {
    var id = prod.dataset.id
    var cantidad = parseInt(prod.value, 10);
    var cartArray = JSON.parse(localStorage.getItem('productos')) || [];

    if (isNaN(cantidad) || cantidad < 1) {
        eliminar(id)
        return;
    }

    const item = cartArray.find(item => item.productoId == id);
    if (item) {
        item.cantidad = cantidad;
        item.subtotal = item.cantidad * item.pre;
    }

    localStorage.setItem('productos', JSON.stringify(cartArray));
    mostrarDetalle()
}


function mostrarNotificacionEliminar(id, index, cartArray) {
    Swal.fire({
        icon: 'warning',
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar este producto del carrito?',
        showCancelButton: true,
        confirmButtonColor: '#dd7888',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'No, cancelar',
    }).then((result) => {
        // Solo eliminar si el usuario confirma
        if (result.isConfirmed) {
            // Eliminar el producto en el índice encontrado
            cartArray.splice(index, 1);
            
            // Guardar el nuevo arreglo en el localStorage
            localStorage.setItem('productos', JSON.stringify(cartArray));
            
            // Mostrar mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'El producto ha sido eliminado del carrito.',
                showConfirmButton: false,
                timer: 2000
            });
            
            //Limpia el formulario(radio botones)
            const formulario = document.getElementById('formulario');
            formulario.reset();
            //limpia el extra a cero
            $('#extra').text("₡" + 0);
            // Actualizar la interfaz
            mostrarDetalle();
        } else {
            console.log("Eliminación cancelada");
            var valor = document.getElementById('cajaCant').value;
            var numero = parseInt(valor, 10);
            if(numero>=1){
                document.getElementById('cajaCant').value = valor ;
            }else{
                mostrarDetalle();
            }
            
           
        }
    });
}





