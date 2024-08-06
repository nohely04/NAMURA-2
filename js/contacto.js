document.addEventListener('DOMContentLoaded', function() {
let map = L.map('mapa').setView([9.89517, -84.56065],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([9.89517, -84.56065]).addTo(map)
});