// Dato un array contenente 10 numeri, stampare in console il numero più grande.

// Logica dell'applicazione
let numbers = [500, 432, 64, 42, 89, 657, 29,390, 987, 287]
// Confronto il primo numero (maxNumber) con gli altri
let maxNumber = numbers[0]
for (i = 1; i < numbers.length; i++) { 
    // Se un numero supera il precedente diventa maxNumber
    if (numbers[i] > maxNumber) 
        maxNumber = numbers[i]; 
} 
console.log(maxNumber)

