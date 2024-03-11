// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// Logica dell'applicazione
let numbers = []
for (let i = 1; i <= 6; i++){
    const userNumbers = parseInt(prompt('Dimmi un numero'));
    console.log(userNumbers)

    if (userNumbers % 2 !== 0){
        numbers.push(userNumbers)
    }
    console.log(numbers)
}