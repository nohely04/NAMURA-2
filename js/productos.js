function detalleProductos(id) {
    window.location.href = `detalle-productos.html?id=${id}`; /*redirecciona al lugar que indique el id */
  }
function displayProductos(data){
    $("#listaProductos").html('')
    data.forEach((producto) => {
       /* const prod = document.createElement("div")
        prod.classList.add("col")
*/
        const cardprod = `<div class="col"> 
        <div class="card" style="width: 240px; height: 430px; align-items: center;">
        <img src="${producto.imagen_destacada ?producto.imagen_destacada : `img/image-not-found.jpg` }" class="card-img-top" alt="image" >
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-text">Desde: &cent;${producto.precio}</h6>
           <div class="d-grid gap-2">
              <button type="button" class="btn btn-lg btn-primary detalle" onclick="detalleProductos (${producto._id})">Detalle</button>
          </div>
       </div>
      </div>
     </div>`
     // prod.append()
      $("#listaProductos").append(cardprod)
    });
}
function displayCategorias(){
  var select= $('#filter');
  var categorias = [];
  $.each(productos,function(index,producto){
    var categ = producto.categoria;
    if($.inArray(categ,categorias)===-1){
      categorias.push(categ)
      select.append( `<option value="${categ}">${categ} </option>`)
      
    }
    })
  
}

$(document).ready(function () {
  displayProductos(productos);
  displayCategorias()

  $('#filter').change(function() {
    var cat=$(this).val()
    var filtrarProductos
    if(cat === 'all'){
      filtrarProductos=productos
    }else{
      filtrarProductos = productos.filter((function(producto){
        return producto.categoria.includes(cat)
      }))
    }
    displayProductos(filtrarProductos)
  })
});