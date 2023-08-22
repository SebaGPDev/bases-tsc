// Función para contar las palabras en una oración
function countWords(sentence: string): number {
    // Eliminar los espacios en blanco al principio y al final de la oración
    sentence = sentence.trim();

    // Dividir la oración en palabras usando los espacios como delimitadores
    const words = sentence.split(" ");

    // Filtrar para eliminar palabras vacías generadas por espacios consecutivos
    const filteredWords = words.filter(word => word !== "");

    // Devolver la cantidad de palabras en la oración
    return filteredWords.length;
}

// Pedir al usuario que ingrese una oración
const userSentence = prompt("Ingresa una oración:");

if (userSentence !== null) {
    const wordCount = countWords(userSentence);
    alert(`La oración tiene ${wordCount} palabra(s).`);
} else {
    alert("Entrada cancelada por el usuario.");
}
