// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
}

// Función para leer los números y mostrar el resultado
function leerNumeros() {
    // Obtener valores de los campos de entrada
    var valorNum1 = document.getElementById("numero1").value;
    var valorNum2 = document.getElementById("numero2").value;

    // Convertir valores a números
    var num1 = parseFloat(valorNum1);
    var num2 = parseFloat(valorNum2);

    // Validar si los valores son números
    if (isNaN(num1) || isNaN(num2)) {
        if (isNaN(num1)) {
            alert("Por favor, ingrese un número válido en el campo 1.");
        }
        if (isNaN(num2)) {
            alert("Por favor, ingrese un número válido en el campo 2.");
        }
        return;
    }

    // Calcular el resultado
    var resultado = sumar(num1, num2);

    // Mostrar el resultado en la consola y en el HTML
    console.log(resultado);
    document.getElementById("resultado_h1").innerText = resultado;
    document.getElementById("resultado_input").value = resultado;
}
