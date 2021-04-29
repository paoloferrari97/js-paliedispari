//Pari e Dispari:
//Funzione per numero random tra 1 e 5
function numeroRandom() {
    var numero_random = Math.ceil(Math.random() * 5);
    return numero_random;
}

//Funzione per stabilire se un numero è pari o dispari
function pari_dispari(numero) {
    if (numero % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

//L'utente sceglie pari o dispari
var pari_dispari_utente = "";
do {
    pari_dispari_utente = prompt("Scegli pari o dispari?").toLowerCase();
} while (pari_dispari_utente != "pari" && pari_dispari_utente != "dispari");
document.getElementById("hai_scelto").innerHTML = "Hai scelto: " + pari_dispari_utente;

//L’utente inserisce un numero da 1 a 5.
var numero_utente = 0;
do {
    numero_utente = parseInt(prompt("Scegli un numero tra 1 e 5!"));
} while (numero_utente < 1 || numero_utente > 5 || isNaN(numero_utente));
document.getElementById("tuo_numero").innerHTML = "Il tuo numero è: " + numero_utente;

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numero_pc = numeroRandom();
document.getElementById("pc_numero").innerHTML = "Il numero del computer è: " + numero_pc;

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var somma = numero_utente + numero_pc;
var risultato_pari_dispari = pari_dispari(somma);
document.getElementById("somma_pari_dispari").innerHTML = "La somma dei due numeri è: " + somma + ", perciò è: " + risultato_pari_dispari;

//Dichiariamo chi ha vinto.
var messaggio = "";
if (risultato_pari_dispari == pari_dispari_utente) {
    messaggio = "Hai vinto! E' uscito " + risultato_pari_dispari + "!";
} else {
    messaggio = "Hai perso! E' uscito " + risultato_pari_dispari + "!";
}
document.getElementById("messaggio").innerHTML = messaggio;



//Palidroma:
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
function parola_palindroma(parola) {
    var parola_contrario = parola.split(""); //metto i caratteri della parola singolarmente in un array
    parola_contrario = parola_contrario.reverse(); //giro l'array al contrario
    parola_contrario = parola_contrario.join("");  //unisco elementi array in una variabile
    if (parola_contrario == parola) {
        return true;
    }
    return false;
}
var parola = prompt("Inserisci una parola!").toLowerCase();
if (parola_palindroma(parola)) {
    document.getElementById("msg").innerHTML = "La tua parola è palindroma!";
} else {
    document.getElementById("msg").innerHTML = "La tua parola non è palindroma!";
}
document.getElementById("tua_parola").innerHTML = "La tua parola è: " + parola;