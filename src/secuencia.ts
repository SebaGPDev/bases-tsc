// Definición de función para generar la secuencia de Fibonacci
function generateFibonacciSequence(n: number): number[] {
    const sequence: number[] = [];

    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    return sequence;
}

// Número de términos de la secuencia que deseas generar
const N = 10;

// Generar y mostrar la secuencia de Fibonacci
const fibonacciSequence = generateFibonacciSequence(N);
alert(fibonacciSequence)
