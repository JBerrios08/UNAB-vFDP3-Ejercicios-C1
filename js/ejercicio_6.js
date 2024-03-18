function calcular_6() {
    var tipoVehiculo = document.getElementById("tipoVehiculo").value;
    var indicador = parseFloat(document.getElementById("indicador").value);
    var resultado;

    if ((tipoVehiculo === "C" || tipoVehiculo === "A" || tipoVehiculo === "M") && indicador <= 0.3) {
        resultado = "Resultado: Negativo (No da positivo en el control de alcoholemia)";
    } else {
        if (tipoVehiculo === "T" && indicador <= 0.5) {
            resultado = "Resultado: Negativo (No da positivo en el control de alcoholemia)";
        } else {
            resultado = "Resultado: Positivo (Da positivo en el control de alcoholemia)";
        }
    }

    document.getElementById("resultado_6").innerText = resultado;
}