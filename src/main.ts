// import './style.css'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// Definición de tipos y enums
enum Operation {
    ADD = "add",
    SUBTRACT = "subtract",
    MULTIPLY = "multiply",
    DIVIDE = "divide",
  }
  
  interface CalculatorInput {
    number1: number;
    number2: number;
    operation: Operation;
  }
  
  // Funciones de cálculo
  function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Función principal de la calculadora
  function calculate(input: CalculatorInput): number {
    switch (input.operation) {
      case Operation.ADD:
        return add(input.number1, input.number2);
      case Operation.SUBTRACT:
        return subtract(input.number1, input.number2);
      case Operation.MULTIPLY:
        return multiply(input.number1, input.number2);
      case Operation.DIVIDE:
        return divide(input.number1, input.number2);
      default:
        throw new Error("Invalid operation");
    }
  }
  
  // Entrada de usuario y cálculo
  const userInput: CalculatorInput = {
    number1: parseFloat(prompt("Ingrese el primer número:") || '0'),
    number2: parseFloat(prompt("Ingrese el segundo número:") || '0'),
    operation: prompt(
      "Ingrese la operación deseada (add, subtract, multiply, divide):"
    ) as Operation,
  };
  
  
  try {
    const result = calculate(userInput);
    alert(`El resultado es: ${result}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Ocurrió un error:", error.message);
    } else {
      console.error("Ocurrió un error desconocido");
    }
  }
  
  

