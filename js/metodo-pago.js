async function mostrarTarjeta() {
    const tarjeta = document.getElementById("numeroTarjeta");
    const numeroTarjeta = tarjeta.val().replace(/\s+/g, '');

    if (numeroTarjeta.length < 16) {
        document.getElementById('errorTarjeta').innerText = 'Ingrese el número de la tarjeta correcto.';
        return;
    }

    const bin = numeroTarjeta.substring(0, 6);

    try {
        const response = await fetch(`https://data.handyapi.com/bin/${bin}`);
        const data = await response.json();

        if (data && data.Scheme) {
            const empresa = data.Scheme.toUpperCase();
            const logo = (empresa === 'VISA') ? '/img/visa.png' : '/img/mastercard.png';
            const tipo = (data.Type === 'DEBIT') ? 'Débito' : 'Crédito';

            $('#logo').html(`img src="${logo}" alt="${empresa}" style="max-width: 20px;"`)
        } else {
            alert("La tarjeta no corresponde a ninguna empresa");
            return;
        }
    } catch (error) {
        alert("Error al procesar el pago")
        return;
    }

}
