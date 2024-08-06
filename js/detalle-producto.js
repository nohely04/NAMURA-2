$(document).ready(function(){
    const url = new URLSearchParams(window.location.search);
    const productoId = url.get("id")

    if(productoId){
        console.log(`Detalles del Producto con ID: ${productoId}`);
        const prod=productos.find((b)=>b._id==productoId) 
        if(prod){
            console.table(prod)
            $("#titulo").text(prod.nombre)
            $("#categoria").html("<b>Categoria </b>"+prod.categoria)
            $("#precio").html("<b>Precio: &cent;</b>"+ prod.precio)
            $("#descripcion").text((prod.descripcion? prod.descripcion :'No description'))
            let tamaños = "<br><b>Pequeño: </b>"+prod.tamaños.Pequeño+ "<br><b>\nMediano: </b>"+ prod.tamaños.Mediano +"<br><b>\nGrande: </b>"+ prod.tamaños.Grande
            $('#tamaño').html("<b>Tamaños </b>"+tamaños)
            $("#tiempo").html("<b>Tiempo de entrega: </b>"+prod.tiempo_entrega)
            $("#opciones").html("<b>Opciones de entrega: </b>"+prod.opcion_entrega)
            $("#stock").html(prod.stock)
        }

        prod.galeria_imagenes.forEach(galeria => {
            $("#uno").attr("src",prod.galeria_imagenes[0])
            $("#dos").attr("src",prod.galeria_imagenes[1])
            $("#tres").attr("src",prod.galeria_imagenes[2])
        } )
    }

})