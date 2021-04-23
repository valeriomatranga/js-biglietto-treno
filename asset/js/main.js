//distanza da percorrere 
var distanza = prompt("Quanti km devi percorrere?")

if ( distanza <1 || isNaN(distanza)){
    alert("Devi mettere il numero dei km da percorrere")
}

//eta del passeggero
var eta = prompt("Quanti anni hai?")
console.log(eta);

//costo del biblietto (0.21€ al km)
var km = distanza * 0.21;
console.log(km);

//sconto del 20% per i minorenni
var sconto20 = (km * 20) / 100;

//sconto del 40% per over 65
var sconto40 = (km * 40) / 100;

if ( eta <1 || eta >100 || isNaN(eta)){
    alert("devi inserire la tua eta!")
}
if(eta < 18){
   sconto20
   console.log(km - sconto20);
}
if(eta > 65){
    sconto40
    console.log(km -sconto40);
}
