function myfunction1(){
let a = document.getElementById("input1").value;
let b = document.getElementById("input2").value;
let result = a + b;
document.getElementById("result").innerHTML = result;
}

function myfunction2(){
let a = document.getElementById("input-longitud").value;
document.getElementById("result2").innerHTML = (a.length) + " palabras ";
}

function myfunction3(){
let cadena = document.getElementById("input-remplazar").value;
let subcadena1 = document.getElementById("input-remplazar2").value;
let subcadena2 = document.getElementById("input-remplazar3").value;

let result = cadena.replace(subcadena1, subcadena2);
document.getElementById("result3").innerHTML = result;
}

function myfunction4(){
let a = document.getElementById("input-dividir").value;
let b = document.getElementById("input-dividir2").value;
document.getElementById("result4").innerHTML = a.split(b)

}