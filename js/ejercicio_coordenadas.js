function verificarCoordenadas() {
    var x1 = parseFloat(document.getElementById("inputX1").value);
    var y1 = parseFloat(document.getElementById("inputY1").value);
    var x2 = parseFloat(document.getElementById("inputX2").value);
    var y2 = parseFloat(document.getElementById("inputY2").value);
    var x3 = parseFloat(document.getElementById("inputX3").value);
    var y3 = parseFloat(document.getElementById("inputY3").value);

    var p1 = (y2 - y1) / (x2 - x1);
    var p2 = (y3 - y2) / (x3 - x2);

    var resultado = "";

    if (p1 === p2) {
        resultado = "Los puntos están en una línea recta.";
    } else {
        var area = Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);
        resultado = "Los puntos no están en una línea recta. <br> El área del triángulo formado por los puntos es: " + area;
    }

    document.getElementById("resultado").innerHTML = resultado;
}