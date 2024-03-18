function calcular_5() {
    var codigo = parseInt(document.getElementById("codigo").value);
    var categoria;

    if (codigo % 2 === 0) {
        if (codigo % 3 === 0 && codigo % 5 === 0) {
            categoria = "Director general";
        } else if (codigo % 3 === 0 && codigo % 5 === 0) {
            categoria = "Directivo";
        } else {
            categoria = "Staff";
        }
    } else {
        categoria = "Seguridad";
    }

    document.getElementById("resultado_5").innerText = "La categoría del empleado es: " + categoria;
}