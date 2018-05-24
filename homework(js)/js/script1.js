window.onload = function() {



eur = prompt("Enter euro: ");
usd = prompt("Enter usd");
var eur = parseInt(eur);
var usd = parseInt(usd);
var eur_amount = 33.22;
var usd_amount = 26.98;

var euro = (eur*eur_amount+ "UAH");
console.log(euro);
var dollar = (usd*usd_amount+ "UAH");
console.log(dollar);
var equal = (eur_amount/usd_amount);
console.log(equal.toFixed(5));
    
document.getElementById('txt1').innerHTML = eur + " EUR = " + euro;
document.getElementById('txt2').innerHTML = usd + " USD = " + dollar;
document.getElementById('txt3').innerHTML = "EUR to USD = " + equal.toFixed(5);
}