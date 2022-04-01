/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. 
*/

//L’utente sceglie pari o dispari
const even_or_odd = prompt("Scegli tra pari o dispari");

//Verifico se effettivamente è pari o dispari
if (even_or_odd === "pari" || even_or_odd === "dispari") {
  console.log(`Hai scelto: ${even_or_odd},  `);
} else {
  alert("Non è presente la scelta da te indicata!");
}

//L'utente inserisce un numero da 1 a 5.
const user_number = parseInt(prompt("Scegli un numero da 1 a 5"));

//Verifico se effettivamente è tra 1 e 5
if ((user_number > 5) | (user_number < 1)) {
  alert("Non è presente la scelta da te indicata!");
} else {
  console.log(` il tuo numero è: ${user_number}`);
}

//Creo una funzione che generi numeri randomici da 1 a 5
function generate_random_num(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Numero random per il computer
const computer_random_num = generate_random_num(1, 6);
console.log(` Il numero del computer è: ${computer_random_num}`);


//Creo una funzione che generi il totale
function sum_check(userNum, computerNum) {
  const sum = userNum + computerNum;

  if (sum % 2 === 0) {
    console.log(`Il totale è pari: ${sum}`);
  } else {
    console.log(`Il totale è dispari: ${sum}`);
  }
}


//Controllo se il numero è pari o dispari ed indico il vincitore
const sum = sum_check(user_number, computer_random_num);
const sumOdd = "dispari";
const sumEven = "pari";

//Se il totale è dispari, e la scleta dell'utente è dispari
// e la somma dei 2 numeri è dispari. Hai vinto
if (sumOdd === even_or_odd && sum % 2 != 0) {
  console.log("Hai vinto!");

  //Se il totale è pari, e la scleta dell'utente è pari
  // e la somma dei 2 numeri è pari. Hai vinto
} else if (sumEven === even_or_odd && sum % 2 === 0) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}
