// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Logica dell'applicazione
let sum = 0;
for (let i = 1; i <= 5; i++){
    const userNumbers = parseInt(prompt('Dimmi un numero'));
    console.log(userNumbers)
    sum = sum + userNumbers
}

// Stampo dei risultati all'utente
alert('La somma dei numeri inseriti è ' + sum)