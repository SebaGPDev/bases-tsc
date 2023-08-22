// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
}

// Pedir al usuario que elija una opción
const choice = prompt("Elige una opción:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius");

if (choice !== null) {
    if (choice === "1") {
        const celsiusInput = parseFloat(prompt("Ingresa la temperatura en grados Celsius:") || "0");
        const fahrenheitResult = celsiusToFahrenheit(celsiusInput);
        alert(`${celsiusInput} grados Celsius son ${fahrenheitResult.toFixed(2)} grados Fahrenheit.`);
    } else if (choice === "2") {
        const fahrenheitInput = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:") || "0");
        const celsiusResult = fahrenheitToCelsius(fahrenheitInput);
        alert(`${fahrenheitInput} grados Fahrenheit son ${celsiusResult.toFixed(2)} grados Celsius.`);
    } else {
        alert("Opción no válida. Por favor elige 1 o 2.");
    }
} else {
    alert("Entrada cancelada por el usuario.");
}
