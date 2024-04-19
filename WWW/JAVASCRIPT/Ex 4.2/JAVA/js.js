function myfunction(){
let a = document.getElementById("input").value

if ( a < 0) {
    resultado = " No s'accepten números negatius "
}
else if ( a <= 10) {
    resultado = " Correcte "
}
else {
    resultado = " T'has passat "
}
document.getElementById("result").innerHTML = resultado
}