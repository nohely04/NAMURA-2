function detallCompra() {
    window.location.href = 'detalle-compra.html'; /*redirecciona al lugar que indique el id */
  }

  function regresarComprar() {
    window.location.href = 'productos.html'; /*redirecciona al lugar que indique el id */
  }

  function regresarDetalle() {
    // Obtener el ID del producto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Asumiendo que el ID del producto está en la URL como ?id=123

    // Redireccionar a la página de productos o detalles según el ID
    if (productId) {
        window.location.href = `detalle-producto.html?id=${productId}`;
    } else {
        window.location.href = 'detalle-producto.html';
    }
}