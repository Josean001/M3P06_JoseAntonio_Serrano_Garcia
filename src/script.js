function iniciarPrograma() {
    let letrasConcatenadas = "";
    let continuar = true;

    while (continuar) {
        let letra = prompt("Inserte una letra:");

        // Si el usuario presiona "Cancelar" en el prompt
        if (letra === null) {
            continuar = false;
            break;
        }

        // Validación: letra debe ser solo un carácter alfabético
        if (letra.length > 1) {
            alert("Las letras deben introducirse de una en una.");
        } else if (!/^[a-zA-Z]$/.test(letra)) {
            alert("Solo se pueden introducir letras.");
        } else {
            letrasConcatenadas += letra;
        }
    }

    // Muestra el resultado final
    document.getElementById("resultado").textContent = "Letras ingresadas: " + letrasConcatenadas;
}