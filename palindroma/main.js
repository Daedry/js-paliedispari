/* 
Palidroma
Chiedere all’utente di inserire una parola,
Creare una funzione per capire se la parola inserita è palindroma
*/

//Creo una funzione per verificare se una parola è palindroma
function check_word_palindrome(word) {
    
    //divido ogni carattere
    const dividedWord = word.split("");
    
    //Inverto L'inizio e la fine della parola
    const reservedWord = dividedWord.reverse();
    
    //Unisco i caratteri precedentemente divisi
    const fullReversedWord = reservedWord.join("");
    
    //Controllo se la parola invertita 
    //è uguale alla parola scritta dall'utente
    if (fullReversedWord === word) {
        document.write(`La parola: ${askWord} è palindroma!`);
    } else {
        document.write(`La parola: ${askWord} non è palindroma!`);
    }
}

//Chiedo una parola all'utente
const askWord = prompt("Inserisci una parola");

//Invoco la funzione
check_word_palindrome(askWord);