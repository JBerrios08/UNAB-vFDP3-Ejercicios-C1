function calcularTotalLlamada(cantidadMinutos) {
    var cantidadTotal;
    
    if (cantidadMinutos > 5) {
        cantidadTotal = (((cantidadMinutos - 5) * 2) + 10);
    } else {
        cantidadTotal = 10;
    }
    
    return cantidadTotal;
}

function calcular() {
    var cantidadMinutos = parseInt(document.getElementById("cantidadMinutos").value);
    var totalPagar = calcularTotalLlamada(cantidadMinutos);
    document.getElementById("resultado").innerText = "La cantidad total a pagar es: $" + totalPagar;
}