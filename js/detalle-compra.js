$(document).ready(function () {

    // Obtener los datos del carrito desde localStorage
    let cartArray = JSON.parse(localStorage.getItem('productos')) || [];
    console.table(cartArray)

    // Obtener el tbody de la tabla
    const tbody = document.querySelector('#detalle tbody');
    tbody.innerHTML = ''; // Limpiar el contenido existente

    // Recorrer los elementos del carrito y crear filas
    cartArray.forEach(item => {
        const row = document.createElement('tr');
        console.table(item.imagen)
        row.innerHTML = `
            <td>${item.productoId}</td>
            <td><img src="${item.imagen}" alt="imagen" style="width: 100px; height: 100PX; class="img-fluid"></td>
            <td>${item.nombre}</td>
            <td>${item.pre}</td>
            <td><input type="number" min="1" value="${item.cantidad}"</td>
            <td>${item.subtotal}</td>
        `;

        tbody.appendChild(row);
    });
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//mostrar detalle





