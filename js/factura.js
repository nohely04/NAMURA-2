$(document).ready(function () {
    mostrarFactura();
});

function regresar() {
    localStorage.removeItem('productos');
    localStorage.removeItem('total');
    localStorage.removeItem('Nombre');
    localStorage.removeItem('opcionEnvio');
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
        <td>        </td>
        <td>        </td>
        <td>${item.cantidad}</td>
        <td>&cent;${item.subtotal}</td>
        `;
        tbody.appendChild(row);
    });
    var total = JSON.parse(localStorage.getItem('total')) ;
    $('#total').text("₡" + total);

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
    document.getElementById('fecha').textContent = `Fecha: ${fechaFormateada}`;


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

// // Recuperar el último número de factura almacenado en localStorage
// let ultimo = localStorage.getItem('ultimoNumeroFactura');

// // Si no hay un número almacenado, inicializar con 0
// if (!ultimo) {
//     ultimo = 0;
// } else {
//     ultimo = parseInt(ultimo, 10); // Convertir el valor a número
// }

// // Incrementar el último número de la factura
// ultimo += 1;

// // Guardar el nuevo número en el localStorage
// localStorage.setItem('ultimoNumeroFactura', ultimo);

// // Dar formato al número de factura
// let nuevoNumero = ultimo.toString().padStart(3, '0');

// // Insertar el número de factura en el HTML
// document.getElementById('factura').textContent = `#${nuevoNumero}`;


//MOSTRAR OPCION DE ENVIO
const opcionValor = document.getElementById('opcionValor');
    
// Al cargar la página, verificar si hay una opción guardada y marcar el radio correspondiente
const opcionGuardada = localStorage.getItem('opcionEnvio');
if (opcionGuardada) {
    const radioGuardado = document.getElementById(opcionGuardada);
    if (radioGuardado) {
        radioGuardado.checked = true;
    }
    // Mostrar el valor guardado
    opcionValor.textContent = `Envio: ${opcionGuardada}`;
}

//MÉTODO DE PAGO
const tarjeta = localStorage.getItem('tarjeta');
document.getElementById('metodo').textContent = `Tarjeta: ${tarjeta}`;

