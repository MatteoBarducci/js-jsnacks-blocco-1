// Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// Logica dell'applicazione
let numbers = []
for (let i = 1; i <= 5; i++){
    const userNumbers = parseInt(prompt('Dimmi un numero'));
    console.log(userNumbers)

    if (!numbers.includes(userNumbers)){
        numbers.push(userNumbers)
    }
    console.log(numbers)
}
