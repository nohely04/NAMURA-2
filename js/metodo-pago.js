document.getElementById('fetchButton').addEventListener('click', function(event) {
    event.preventDefault(); 

    const bin = document.getElementById('binInput').value;

    if (bin.length === 16) {
        const num = bin.substring(0, 6);
        const url = `https://data.handyapi.com/bin/${num}`; 

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let logo = '';
                if (data.Scheme.toLowerCase() === 'visa') {
                    logo = '<img src="./Img/Visa.jpeg" alt="Visa" />';
                } else if (data.Scheme.toLowerCase() === 'mastercard') {
                    logo = '<img src="./Img/Mastercard.png" alt="MasterCard" />';
                }

                document.getElementById('result').innerHTML = `
                    <p class="title"></p><p>${data.Scheme} ${logo}</p>
                `;

                // Activar los campos de fecha de vencimiento y CVV
                document.getElementById('fechaVencimiento').disabled = false;
                document.getElementById('codigoCVV').disabled = false;
                document.getElementById('submitButton').disabled = false;

                // Agregar atributos required dinámicamente
                document.getElementById('fechaVencimiento').setAttribute('required', 'required');
                document.getElementById('codigoCVV').setAttribute('required', 'required');
            })
            .catch(error => {
                document.getElementById('result').innerHTML = `<p>Error al cargar los datos: ${error}</p>`;
            });
    } else {
        alert('El número de tarjeta debe tener exactamente 16 dígitos.');
    }
});

document.getElementById('codigoCVV').addEventListener('input', function() {
    const cvv = document.getElementById('codigoCVV');
    const cvvError = document.getElementById('errorCVV');
    const limite = /^\d{3,4}$/;

    if(cvv > 3 && cvv < 4){
        errorCVV.style.display = 'block';
    }else{
        errorCVV.style.display = 'none';
    }
});

