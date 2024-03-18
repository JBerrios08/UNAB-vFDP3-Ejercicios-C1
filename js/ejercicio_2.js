function calcularPrecioTotal(precioCosto) {
    var precioTotal;

    if (precioCosto < 3) {
        precioTotal = ((precioCosto * 0.15) + precioCosto);
    } else {
        if (precioCosto >= 3 && precioCosto < 6) {
            precioTotal = ((precioCosto * 0.5) + precioCosto);
        } else {
            precioTotal = ((precioCosto * 0.25) + precioCosto);
        }
    }

    return precioTotal;
}

function calcular_2() {
    var precioCosto = parseFloat(document.getElementById("precioCosto").value);
    var precioTotal = calcularPrecioTotal(precioCosto);
    var ganancia = precioTotal - precioCosto;
    document.getElementById("resultado_2").innerText = "El precio total del libro es de: $" + precioTotal + ". Con una ganancia de: $" + ganancia + ".";
}