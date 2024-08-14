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

                let tipoTarjeta= '';
                if(data.Type === 'DEBIT'){
                    tipoTarjeta='Débito';
                }else{
                    tipoTarjeta='Crédito';
                }

                document.getElementById('result').innerHTML = `
                    <p class="title"></p><p>${data.Scheme} ${logo} ${tipoTarjeta}</p>
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
    const cvv = this.value; 
    const cvvError = document.getElementById('errorCVV');
    const regexCVV = /^\d{3,4}$/; 
    if (!regexCVV.test(cvv)) {
        cvvError.style.display = 'block';
    } else {
        cvvError.style.display = 'none';
    }
});

document.getElementById('fechaVencimiento').addEventListener('input', function() {
    const errorVencimiento = document.getElementById('errorVencimiento');
    let fecha = this.value;

    // Formatear fecha con barra inclinada
    fecha = fecha.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (fecha.length > 2) {
        fecha = fecha.slice(0, 2) + '/' + fecha.slice(2);
    }
    if (fecha.length > 7) {
        fecha = fecha.slice(0, 7); // Limitar a MM/AAAA
    }
    this.value = fecha;

    const regexFecha = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const fechaActual = new Date();
    const [mes, anio] = fecha.split('/');
    const fechaIngreso = new Date(anio, mes - 1);

    if (!regexFecha.test(fecha) || fechaIngreso <= fechaActual) {
        errorVencimiento.style.display = 'block';
    } else {
        errorVencimiento.style.display = 'none';
    }
});


