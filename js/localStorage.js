function carrito(){
   /*localStorage.clear();
   localStorage.removeItem('total');*/
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
            mostrarNotificacionError();
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
        timer: 2000, 
        timerProgressBar: true,
        showConfirmButton: false
    })
}
function mostrarNotificacionError() {
    Swal.fire({
        icon: 'warning',
        text: '¡Ha ocurrido un error!',
        timer: 2000, 
        timerProgressBar: true,
        showConfirmButton: false
    })
}
