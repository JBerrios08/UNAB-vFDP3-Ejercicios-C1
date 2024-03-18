function calcular_10() {
    var montoCompra = parseFloat(document.getElementById("montoCompra").value);
    var descuento;
    var montoTotal;

    if (montoCompra > 1000) {
        descuento = montoCompra * 0.20;
        montoTotal = montoCompra - descuento;
    } else {
        montoTotal = montoCompra;
    }

    document.getElementById("resultado_10").innerText = "El monto a pagar con el descuento aplicado es: " + montoTotal + " Bs.";
}