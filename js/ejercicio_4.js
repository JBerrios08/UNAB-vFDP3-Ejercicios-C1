function calcular_4() {
    var horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    var precioPorHora = parseFloat(document.getElementById("precioPorHora").value);
    var salarioBase, horasExtras, salarioHorasExtras, salarioTotal, impuesto, salarioNeto;

    if (horasTrabajadas <= 35) {
        salarioBase = horasTrabajadas * precioPorHora;
        horasExtras = 0;
    } else {
        salarioBase = 35 * precioPorHora;
        horasExtras = horasTrabajadas - 35;
    }

    salarioHorasExtras = horasExtras * (precioPorHora * 1.5);
    salarioTotal = salarioBase + salarioHorasExtras;

    if (salarioTotal < 600) {
        impuesto = salarioTotal * 0;
    } else {
        if (salarioTotal <= 1000) {
            impuesto = salarioTotal * 0.20;
        } else {
            impuesto = salarioTotal * 0.30;
        }
    }

    salarioNeto = salarioTotal - impuesto;

    document.getElementById("resultado_4").innerText = "El salario neto del trabajador es: $" + salarioNeto.toFixed(2);
}