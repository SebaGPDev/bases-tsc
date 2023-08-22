interface MultiplicationTableResult {
    multiplicand: number;
    multiplier: number;
    result: number;
  }
  
  function generateMultiplicationTable(base: number, limit: number): MultiplicationTableResult[] {
    const table: MultiplicationTableResult[] = [];
  
    for (let multiplier = 1; multiplier <= limit; multiplier++) {
      const result = base * multiplier;
      table.push({ multiplicand: base, multiplier, result });
    }
  
    return table;
  }
  
  function displayMultiplicationTable(table: MultiplicationTableResult[]): string {
    let tableOutput = "Tabla de Multiplicar:\n";
    for (const row of table) {
      tableOutput += `${row.multiplicand} x ${row.multiplier} = ${row.result}\n`;
    }
    return tableOutput;
  }
  
  const baseInput = prompt("Ingrese un número base para la tabla de multiplicar:");
  const limitInput = prompt("Ingrese el límite de la tabla de multiplicar:");
  
  if (baseInput === null || limitInput === null) {
    alert("Operación cancelada por el usuario.");
  } else {
    const baseNumber = parseInt(baseInput);
    const limitNumber = parseInt(limitInput);
  
    if (isNaN(baseNumber) || isNaN(limitNumber)) {
      alert("Por favor, ingrese valores numéricos válidos.");
    } else {
      const multiplicationTable = generateMultiplicationTable(baseNumber, limitNumber);
      const tableOutput = displayMultiplicationTable(multiplicationTable);
      alert(tableOutput);
    }
  }
  