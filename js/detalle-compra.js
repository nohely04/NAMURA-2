$(document).ready(function () {
    mostrarDetalle();
});

    function mostrarDetalle() {

    // Obtener los datos del carrito desde localStorage
    let cartArray = JSON.parse(localStorage.getItem('productos')) || [];
    console.table(cartArray)

    // Obtener el tbody de la tabla
    const tbody = document.querySelector('#detalle tbody');
    tbody.innerHTML = ''; // Limpiar el contenido existente

    // Recorrer los elementos del carrito y crear filas
    cartArray.forEach(item=> {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <button type="button" class="btn-close eliminar" aria-label="Close" data-id="${item.índice}"> <i class="bi bi-x-lg"></i></button></td>
            <td><img src="${item.imagen}" alt="imagen" style="width: 100px; height: 100PX; class="img-fluid"></td>
            <td>${item.nombre}</td>
            <td>${item.pre}</td>
            <td><input type="number" min="1" value="${item.cantidad}"</td>
            <td>${item.subtotal}</td>
        `;

        tbody.appendChild(row);
    });
   $(document).on("click", ".eliminar", function() {
    const id = $(this).data("id");
    eliminar(id);
});
   
}


// Función para eliminar un ítem del localStorage por su clave
function eliminar(id) {
    let cartArray = JSON.parse(localStorage.getItem('productos')) || [];
    cartArray = cartArray.filter(x => x.productoId !== id);
    localStorage.setItem('productos', JSON.stringify(cartArray));
    mostrarDetalle();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//mostrar detalle







