//distanza da percorrere 
var distanza = prompt("Quanti km devi percorrere?")
console.log(distanza);

//eta del passeggero
var eta = prompt("Quanti anni hai?")
console.log(eta);

//eta minore
var minore = ( <= 17);

//pensionato
var pensionato = ( >= 65);

//costo del biblietto (0.21€ al km)
var km = distanza * 0.21;
console.log(km);

//sconto del 20% per i minorenni
var sconto20 = (km * 20) / 100;

//sconto del 40% per over 65
var sconto40 = (km * 40) / 100;

//costo del biglietto minori 18 (0.21€ al km - 20%)
var prezzoMinori = km - sconto20;
console.log(prezzoMinori);

//costo del biglietto over 65 (0.21€ al km - 40%)
var prezzoPensionati = km - sconto40;
console.log(prezzoPensionati)