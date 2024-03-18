function calcularPrestamo(montoInicial) {
    var interes, cuotas, montoTotal;

    if (montoInicial < 4000) {
        interes = 0.12;
    } else {
        interes = 0.10;
    }

    if (montoInicial < 1000) {
        cuotas = 1;
    } else {
        if (montoInicial < 2000) {
            cuotas = 1;
        } else {
            if (montoInicial < 3000) {
                cuotas = 2;
            } else {
                if (montoInicial <= 5000) {
                    cuotas = 3;
                } else {
                    cuotas = 4;
                }
            }
        }
    }

    montoTotal = (montoInicial * interes) + montoInicial;

    return [montoTotal, cuotas];
}

function calcular_3() {
    var montoInicial = parseFloat(document.getElementById("montoInicial").value);
    var resultado = calcularPrestamo(montoInicial);
    var montoTotal = resultado[0];
    var cuotas = resultado[1];
    document.getElementById("resultado_3").innerText = "El monto total del préstamo es: $" + montoTotal + ". Debe pagar en " + cuotas + " cuotas de $" + (montoTotal / cuotas).toFixed(2) + ".";
}