
const URL_API_BIN = "https://lookup.binlist.net/45717360"

        document.addEventListener("DOMContentLoaded", () => {
            const formularioPago = document.getElementById("formularioPago");
            const campoNumeroTarjeta = document.getElementById("numeroTarjeta");
            const logoTarjeta = document.getElementById("logoTarjeta");
            const errorTarjeta = document.getElementById("errorTarjeta");
            const campoFechaVencimiento = document.getElementById("fechaVencimiento");
            const errorVencimiento = document.getElementById("errorVencimiento");
            const campoCodigoCVV = document.getElementById("codigoCVV");
            const errorCVV = document.getElementById("errorCVV");

            campoNumeroTarjeta.addEventListener("input", () => {
                const numeroTarjeta = campoNumeroTarjeta.value.replace(/\s+/g, '');
                if (numeroTarjeta.length >= 6) {
                    const bin = numeroTarjeta.substring(0, 6);
                    fetch(URL_API_BIN + bin)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Error: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            const tipoTarjeta = data.scheme ? data.scheme.toLowerCase() : '';
                            let imageUrl = "";
                            if (tipoTarjeta === "visa") {
                                imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png";
                                logoTarjeta.alt = "Visa";
                            } else if (tipoTarjeta === "mastercard") {
                                imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png";
                                logoTarjeta.alt = "MasterCard";
                            } else {
                                imageUrl = "";
                                logoTarjeta.alt = "Desconocido";
                            }
                            logoTarjeta.src = imageUrl;
                            if (imageUrl) {
                                logoTarjeta.classList.remove("d-none");
                            } else {
                                logoTarjeta.classList.add("d-none");
                            }
                        })
                        .catch(error => {
                            console.error("Error al consultar el API de BIN:", error);
                            logoTarjeta.src = "";
                            logoTarjeta.classList.add("d-none");
                        });
                } else {
                    logoTarjeta.src = "";
                    logoTarjeta.classList.add("d-none");
                }
            });

            formularioPago.addEventListener("submit", (event) => {
                event.preventDefault();

                if (!esNumeroTarjetaValido(campoNumeroTarjeta.value)) {
                    errorTarjeta.style.display = "block";
                    campoNumeroTarjeta.classList.add("error");
                } else {
                    errorTarjeta.style.display = "none";
                    campoNumeroTarjeta.classList.remove("error");
                }

                if (!esFechaVencimientoValida(campoFechaVencimiento.value)) {
                    errorVencimiento.style.display = "block";
                    campoFechaVencimiento.classList.add("error");
                } else {
                    errorVencimiento.style.display = "none";
                    campoFechaVencimiento.classList.remove("error");
                }

                if (!esCVVValido(campoCodigoCVV.value)) {
                    errorCVV.style.display = "block";
                    campoCodigoCVV.classList.add("error");
                } else {
                    errorCVV.style.display = "none";
                    campoCodigoCVV.classList.remove("error");
                }

                if (esNumeroTarjetaValido(campoNumeroTarjeta.value) && esFechaVencimientoValida(campoFechaVencimiento.value) && esCVVValido(campoCodigoCVV.value)) {
                    alert("Pago realizado exitosamente.");
                    formularioPago.reset();
                    logoTarjeta.src = "";
                    logoTarjeta.classList.add("d-none");
                }
            });

            campoFechaVencimiento.addEventListener('input', (event) => {
                let value = event.target.value.replace(/\D/g, '');
                if (value.length > 6) {
                    value = value.slice(0, 6);
                }
                if (value.length > 2) {
                    value = value.slice(0, 2) + '/' + value.slice(2);
                }
                event.target.value = value;
            });
        });

        function esNumeroTarjetaValido(numeroTarjeta) {
            const regex = /^\d{16}$/;
            return regex.test(numeroTarjeta.replace(/\s+/g, ''));
        }

        function esFechaVencimientoValida(fechaVencimiento) {
            const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
            if (!regex.test(fechaVencimiento)) {
                return false;
            }
            const [mes, año] = fechaVencimiento.split('/').map(Number);
            const fechaActual = new Date();
            const añoActual = fechaActual.getFullYear();
            const mesActual = fechaActual.getMonth() + 1;
            if (año < añoActual || (año === añoActual && mes < mesActual)) {
                return false;
            }
            return true;
        }

        function esCVVValido(cvv) {
            const regex = /^\d{3,4}$/;
            return regex.test(cvv);
        }