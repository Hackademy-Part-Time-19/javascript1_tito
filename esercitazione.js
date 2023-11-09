var num1;

num1 = 100;

console.log (num1)


var num2;

num2 = 200;

console.log (num2)


var stringa;

stringa = "ciao sono una stringa";

console.log (stringa)


stringa = "ciao sono la nuova stringa";

console.log (stringa)


const PIGRECO = 3.14159265359

console.log (PIGRECO)


var riga1 = 100;

var riga2 = 200;

var riga3 = 300;

var riga3 = 400;

var riga4 = 500;

var riga5 = 600;

var somma = riga1 + riga2 + riga3 + riga4 + riga5;

var media = riga1 + riga2 + riga3 + riga4 + riga5 / 5;

console.log ("La somma tra i numeri equivale a " + somma + " e la media equivale a " + media)


var annoCorrente = 2023;
var annoNascita = 1989;

var età = annoCorrente - annoNascita ;
var età100 = 100 - età;

console.log ("Hai " + età + " anni e ti mancano " + età100 + " anni per compierne 100")


var anniUtente = parseInt(prompt("Inserisci qui un numero"));

var anniLavoro = parseInt(prompt("Inserisci qui un numero"));


var somma =  anniUtente + anniLavoro;
var sottrazione =  anniUtente - anniLavoro;
var moltiplicazione = anniUtente * anniLavoro;
var divisione = anniUtente / anniLavoro;
var potenza =  Math.pow(anniUtente,anniLavoro);

console.log("Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (" + somma + "), sottrazione( " + sottrazione + "), moltiplicazione ( " + moltiplicazione + "), divisione ( " + divisione + " ) e potenza ( " + potenza + ")")