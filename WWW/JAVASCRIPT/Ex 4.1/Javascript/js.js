function myfunction(){

let input1 = document.getElementById("input").value


if (input1 >= 5) {
 resultado = " Has aprobado ";
}
else if (input1 < 5) {
    resultado = " Has suspendido ";
}
if (input1 >= 8) {
    resultado = " Que barbarida "
}
else if (input1 <= 3) {
    resultado = " Eres bobo "
}
    document.getElementById("resultado").innerHTML = resultado;
}




    
