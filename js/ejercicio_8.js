function calcular_8() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var signo;

    switch (mes) {
        case 1:
            signo = (dia >= 22) ? "Acuario" : "Capricornio";
            break;
        case 2:
            signo = (dia <= 19) ? "Acuario" : "Piscis";
            break;
        case 3:
            signo = (dia <= 20) ? "Piscis" : "Aries";
            break;
        case 4:
            signo = (dia <= 19) ? "Aries" : "Tauro";
            break;
        case 5:
            signo = (dia <= 20) ? "Tauro" : "Géminis";
            break;
        case 6:
            signo = (dia <= 21) ? "Géminis" : "Cáncer";
            break;
        case 7:
            signo = (dia <= 21) ? "Cáncer" : "Leo";
            break;
        case 8:
            signo = (dia <= 21) ? "Leo" : "Virgo";
            break;
        case 9:
            signo = (dia <= 22) ? "Virgo" : "Libra";
            break;
        case 10:
            signo = (dia <= 22) ? "Libra" : "Escorpio";
            break;
        case 11:
            signo = (dia <= 21) ? "Escorpio" : "Sagitario";
            break;
        case 12:
            signo = (dia <= 21) ? "Sagitario" : "Capricornio";
            break;
        default:
            signo = "No válido";
            break;
    }

    document.getElementById("resultado_8").innerText = "El signo del zodiaco es: " + signo;
}