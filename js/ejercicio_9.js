function calcular_9() {
    var calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    var calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    var calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    var promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
    var resultado;

    if (promedio >= 70) {
        resultado = "El alumno ha aprobado el curso con un promedio de: " + promedio;
    } else {
        resultado = "El alumno ha reprobado el curso con un promedio de: " + promedio;
    }

    document.getElementById("resultado_9").innerText = resultado;
}