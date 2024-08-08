document.addEventListener('DOMContentLoaded', function() {
let map = L.map('mapa').setView([9.89517, -84.56065],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([9.89517, -84.56065]).addTo(map)
});


//Llenar combo box
document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('categoria');
    const prod = productos.categoria
function Categorias(products) {
    // Extraer categorías únicas
    const categories = new Set(products.map(product => product.categoria));

    // Limpiar el combo box
    selectElement.innerHTML = '<option value="">Selecciona una categoría</option>';

    // Agregar opciones al combo box
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        selectElement.appendChild(option);
    });
}

// Llamar a la función para llenar el combo box
Categorias(productos);
});

