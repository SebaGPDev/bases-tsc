// Definición de una interfaz para el resultado del contador
interface CountResult {
    evenCount: number;
    oddCount: number;
  }
  
  // Función para contar números pares e impares en un rango dado
  function countEvenOddNumbers(start: number, end: number): CountResult {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let num = start; num <= end; num++) {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { evenCount, oddCount };
  }
  
  // Obtener el rango de números del usuario (puedes reemplazar esto con tu método de entrada)
  const startInput = prompt("Ingrese el inicio del rango:");
  const endInput = prompt("Ingrese el final del rango:");
  
  if (startInput !== null && endInput !== null) {
    const startRange = parseInt(startInput);
    const endRange = parseInt(endInput);
  
    if (!isNaN(startRange) && !isNaN(endRange)) {
      const result = countEvenOddNumbers(startRange, endRange);
  
      // Mostrar los resultados utilizando alert (puedes cambiar esto según tus necesidades)
      alert(`Cantidad de números pares: ${result.evenCount}\nCantidad de números impares: ${result.oddCount}`);
    } else {
      alert("Ingrese valores numéricos válidos.");
    }
  } else {
    alert("Entrada cancelada por el usuario.");
  }
  