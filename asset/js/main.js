//distanza da percorrere 
var distanza = prompt("Quanti km devi percorrere?");

if ( distanza < 1 || isNaN(distanza)){
    alert("Devi mettere il numero dei km da percorrere");
}



//eta del passeggero
var eta = prompt("Quanti anni hai?")

if ( eta <1 || eta >100 || isNaN(eta)){
    alert("devi inserire la tua eta!")
}



//costo del biblietto (0.21€ al km)
var prezzo = distanza * 0.21;

var prezzoScontato = prezzo;


//sconto del 20% per i minorenni
var sconto20 = (prezzo * 20) / 100;

//sconto del 40% per over 65
var sconto40 = (prezzo * 40) / 100;

if(eta < 18){
    prezzoScontato = prezzo - sconto20;
    console.log(prezzo - sconto20);
}
if(eta > 65){
    prezzoScontato = prezzo - sconto40;
    console.log(prezzo - sconto40);
}

prezzoScontato = prezzoScontato.toFixed(2);

document.getElementById("costo").innerHTML ="Il prezzo del tuo biglietto è: € " + prezzoScontato;
