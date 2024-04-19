function myFunction(){
let a = document.getElementById("numero1").value;
let b = document.getElementById("numero2").value;
a = Number(a);
b = Number(b);
document.getElementById("total").innerHTML = " Heu de pagar " + (a / b).toFixed(2) + "€" + " per persona ";
}