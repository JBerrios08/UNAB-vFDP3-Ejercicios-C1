function convertirTemperatura() {
    var temperatura = parseFloat(document.getElementById("inputTemperatura2").value);
    var unidad = document.getElementById("inputUnidad2").value.toUpperCase();
    var resultado = "";

    switch (unidad) {
        case "K":
            resultado += "Temperatura en Kelvin: " + temperatura + "<br>";
            resultado += "Temperatura en Celsius: " + (temperatura - 273.15) + "<br>";
            resultado += "Temperatura en Fahrenheit: " + ((9 / 5 * temperatura) - 459.67) + "<br>";
            resultado += "Temperatura en Rankine: " + (9 / 5 * temperatura) + "<br>";
            break;
        case "C":
            resultado += "Temperatura en Kelvin: " + (temperatura + 273.15) + "<br>";
            resultado += "Temperatura en Celsius: " + temperatura + "<br>";
            resultado += "Temperatura en Fahrenheit: " + ((9 / 5 * temperatura) + 32) + "<br>";
            resultado += "Temperatura en Rankine: " + (9 / 5 * (temperatura + 273.15)) + "<br>";
            break;
        case "F":
            resultado += "Temperatura en Kelvin: " + (5 / 9 * (temperatura + 459.67)) + "<br>";
            resultado += "Temperatura en Celsius: " + (5 / 9 * (temperatura - 32)) + "<br>";
            resultado += "Temperatura en Fahrenheit: " + temperatura + "<br>";
            resultado += "Temperatura en Rankine: " + (temperatura + 459.67) + "<br>";
            break;
        case "R":
            resultado += "Temperatura en Kelvin: " + (5 / (9 * temperatura)) + "<br>";
            resultado += "Temperatura en Celsius: " + (5 / 9 * (temperatura - 491.67)) + "<br>";
            resultado += "Temperatura en Fahrenheit: " + (temperatura - 459.67) + "<br>";
            resultado += "Temperatura en Rankine: " + temperatura + "<br>";
            break;
        default:
            resultado = "Unidad de temperatura no válida";
    }

    document.getElementById("resultado2").innerHTML = resultado;
}