$(document).ready(function () {
    mostrarFactura();
});

function regresar() {
    window.location.href = 'index.html'; /*redirecciona al lugar que indique el id */
  }


function mostrarFactura() {
    
    // Obtener los datos del carrito desde localStorage
    let cartArray = JSON.parse(localStorage.getItem('productos')) || [];
    console.table(cartArray)

    // Obtener el tbody de la tabla
    const tbody = document.querySelector('#detalle tbody');
    tbody.innerHTML = ''; // Limpiar el contenido existente

    // Recorrer los elementos del carrito y crear filas
    cartArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
    
        <td>${item.nombre}</td>
        <td>&cent${item.pre}</td>
        <td><${item.cantidad}</td>
        <td>&cent;${item.subtotal}</td>
        `;    
        tbody.appendChild(row);
    });


}

//FECHA
const fecha= new Date();

    //sacar la fecha del sistema
    const dia = fecha.getDate().toString();
    const mes = (fecha.getMonth()+1).toString();
    const anio = fecha.getFullYear();

    //acomodar la fecha
    const fechaFormateada = `${dia}/${mes}/${anio}`;

    //insertar la fecha en el HTML
    document.getElementById('fecha').textContent = `Fecha de la compra: ${fechaFormateada}`;


//Mostrar nombre de la persona
const nombre = localStorage.getItem('Nombre');
document.getElementById('nombre').textContent = `Cliente: ${nombre}`;


//NUMERO DE FACTURA- SOLO PARA LA SECCIÓN ACTIVA
let ultimo = 0;

    //Incrementa el último número de la factura
    ultimo=+1;

    //dar formato
    let nuevoNumero = ultimo.toString().padStart(3, '0');7

    //Insertar el número de factura en el html
    document.getElementById('factura').textContent = `#${nuevoNumero}`


