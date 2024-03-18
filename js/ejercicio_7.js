function calcular_7() {
    var tipoVehiculo = document.getElementById("tipoVehiculo").value;
    var tipoHora = document.getElementById("tipoHora").value;
    var numPasajeros = parseInt(document.getElementById("numPasajeros").value);
    var tarifa;

    if (tipoHora === "H") {
        if (tipoVehiculo === "A" && numPasajeros >= 3) {
            tarifa = 0;
        } else {
            if (tipoVehiculo === "C") {
                tarifa = 50;
            } else {
                tarifa = 25;
            }
        }
    } else {
        if (tipoVehiculo === "A") {
            tarifa = 25;
        } else {
            tarifa = 30;
        }
    }

    document.getElementById("resultado_7").innerText = "La tarifa a cobrar es: " + tarifa + " dólares";
}