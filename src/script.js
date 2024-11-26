function iniciarPrograma() {
    let letras = []; // Lista para almacenar las letras ingresadas

    while (true) {
        const input = prompt("Inserte una letra:");

        // Si el usuario cancela, salir del bucle
        if (input === null) {
            break;
        }

        // Verificar si el usuario ha ingresado más de un carácter
        if (input.length > 1) {
            alert("Las letras deben introducirse de una en una.");
            continue;
        }

        // Validar si el carácter ingresado es una letra
        if (!/^[a-zA-Z]$/.test(input)) {
            alert("Sólo se pueden introducir letras.");
            continue;
        }

        // Agregar la letra válida a la lista
        letras.push(input);
    }

    // Mostrar el resultado en la página web
    const resultadoConcatenado = letras.join(''); // Combina todas las letras
    const resultadoLista = letras.join(', '); // Muestra cada letra separada por comas

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `
        <strong>Letras concatenadas:</strong> ${resultadoConcatenado} <br>
        <strong>Letras individuales:</strong> [${resultadoLista}]
    `;

    // Añadir el resultado al historial
    if (resultadoConcatenado) {
        const historial = document.getElementById("lista");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = resultadoConcatenado; // Muestra el texto concatenado
        historial.appendChild(nuevoElemento);
    }
}