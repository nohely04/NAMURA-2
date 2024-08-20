document.addEventListener('DOMContentLoaded',async function() {
    await fetch('./json/gráfico-pasteles.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se ha encontrado información');
            }
            return response.json();
        })
        .then(pasteles => {
            const nombres = pasteles.map(pastel => pastel.nombre);
            const ventasJulio = pasteles.map(pastel => pastel.ventas_julio);

            const ctx = document.getElementById('ventasChart').getContext('2d');
            const ventasChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: nombres,
                    datasets: [{
                        label: 'Ventas en Agosto',
                        data: ventasJulio,
                        backgroundColor: [
                            '#fcbfc9',
                            '#f4c9c9',
                            '#ffa3b2',
                            '#dd7888'
                        ],
                        borderColor: [
                            '#fcbfc9',
                            '#f4c9c9',
                            '#ffa3b2',
                            '#dd7888'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                font: {
                                    size: 14, 
                                    family: 'Montserrat Light', 
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Ventas de Julio de los Pasteles Más Creativos',
                                font: {
                                    size: 20, 
                                    family: 'Montserrat Light', 
                                }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});
