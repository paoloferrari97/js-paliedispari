//Pari e Dispari:
//Funzione per numero random tra 1 e 5
function numeroRandom() {
    var numero_random = Math.ceil(Math.random() * 5);
    return numero_random;
}

//L'utente sceglie pari o dispari
var pari_dispari_utente = "";
do {
    pari_dispari_utente = prompt("Scegli pari o dispari?").toLowerCase();
} while (pari_dispari_utente != "pari" && pari_dispari_utente != "dispari");

//L’utente inserisce un numero da 1 a 5.
var numero_utente = 0;
do {
    numero_utente = parseInt(prompt("Scegli un numero tra 1 e 5!"));
} while (numero_utente < 1 || numero_utente > 5 || isNaN(numero_utente));

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numero_pc = numeroRandom();
console.log(numero_pc);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.