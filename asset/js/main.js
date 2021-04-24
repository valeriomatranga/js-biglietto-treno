//nome passeggero
var nome = prompt("Inserischi il tuo nome");
if (nome < 2){
    alert( "Inserisci un nome corretto");
}

//cognome passeggero
var cognome = prompt("Inserisci il tuo cognome");
if (cognome < 4){
    alert("Inserisci il cognome corretto");
}

//passeggero
var passeggero = nome + " " + cognome;
document.getElementById("passeggero").innerHTML = "Nominativo: " + passeggero;


//distanza da percorrere 
var distanza = prompt("Quanti km devi percorrere?");
if ( distanza < 1 || isNaN(distanza)){
    alert("Devi mettere il numero dei km da percorrere");
}
document.getElementById("distanza").innerHTML = "Tratta in km: " + distanza;


//eta del passeggero
var eta = prompt("Quanti anni hai?");
if ( eta <1 || eta >100 || isNaN(eta)){
    alert("Devi inserire la tua età!");
}
document.getElementById("eta").innerHTML = "Anni: " + eta;



//costo del biblietto (0.21€ al km)
var prezzo = distanza * 0.21;
var prezzoScontato = prezzo;


//sconto del 20% per i minorenni
var sconto20 = (prezzo * 20) / 100;
if(eta < 18){
    prezzoScontato = prezzo - sconto20;
}


//sconto del 40% per over 65
var sconto40 = (prezzo * 40) / 100;
if(eta > 65){
    prezzoScontato = prezzo - sconto40;
}


//sconto applicato
var scontoApplicato = prezzo - prezzoScontato

prezzoScontato = prezzoScontato.toFixed(2);
document.getElementById("costo").innerHTML = "Prezzo Biglietto: € " + prezzoScontato;
document.getElementById("sconto").innerHTML = "Sconto Applicato: € " + scontoApplicato.toFixed(2);


//numero biglietto
var id_biglietto;
id_biglietto = Math.floor( Math.random() * 1000000);
document.getElementById("numero_biglietto").innerHTML = "ID Tichet: " + id_biglietto;