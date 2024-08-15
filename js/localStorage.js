function carrito(){
    /*localStorage.clear();*/
    const url = new URLSearchParams(window.location.search);
    const productoId = url.get("id");

    const prod = productos.find((b) => b._id == productoId); 
        if (prod) {
            console.table(prod);

            const pre = parseInt(prod.precio);
            const nombre = prod.nombre;
            const imagen = prod.imagen_destacada;
            var cantidad = parseInt(document.getElementById("cantidad").value);
            const subtotal = cantidad * pre;
    
            let product ={
                productoId,
                pre,
                nombre,
                imagen,
                cantidad,
                subtotal 
            };
        
            Existe(product);
            mostrarNotificacionAnadir();
        }else{
            alert("Producto no encontrado.");
        }

}

function guardar(prod){
    
        let storageProd = JSON.parse(localStorage.getItem("productos")) || [];
        storageProd.push(prod);
        localStorage.setItem("productos", JSON.stringify(storageProd));
     
}

function Existe(producto) {
    let existente = false;
    let storageProd = JSON.parse(localStorage.getItem("productos")) || [];

    for (let i = 0; i < storageProd.length; i++) {
        if (storageProd[i].productoId === producto.productoId) {
            existente = true;
            break; // Sal del bucle una vez encontrado el producto
        }
    }

    if (existente) {
        for (let i = 0; i < storageProd.length; i++) {
            if (storageProd[i].productoId === producto.productoId) {
                storageProd[i].cantidad += producto.cantidad;
                storageProd[i].subtotal = storageProd[i].pre * storageProd[i].cantidad;
            }
        }
        localStorage.setItem("productos", JSON.stringify(storageProd));

        
    } else {
        storageProd.push(producto);
        localStorage.setItem("productos", JSON.stringify(storageProd));
    
    }

}

//FUNCIÓN QUE MUESTRA EL MENSAJE CUANDO SE AÑADE UN PRODUCTO AL CARRITO
function mostrarNotificacionAnadir() {
    Swal.fire({
        icon: 'success',
        text: '¡Producto añadido al carrito!',
        timer: 5000, 
        timerProgressBar: true,
        showConfirmButton: false
    })
}
//FUNCIÓN QUE PREGUNTA SI ESTÁ SEGURO AL ELIMINAR UN PRODUCTO DEL CARRITO 
function mostrarNotificacionEliminar(productId) {
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
        if (result.isConfirmed) {
            eliminarProductoDelCarrito(productId); // CAMBIAR ESTO PARA CUANDO TENGAMOS LA FUNCIÓN DE ELIMINAR
            Swal.fire({
                icon: 'success',
                title: 'Eliminado',
                text: 'El producto ha sido eliminado del carrito.',
                showConfirmButton: false,
                timer: 2000
            });
        }
    });
}