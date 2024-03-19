function myFunction(){
    let a = document.getElementById("primera").value;
    let b = document.getElementById("segunda").value;
    let c = document.getElementById("tercera").value;
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let result = a + b + c
    document.getElementById("total").innerHTML = " Tu nota final es " + (result / 3).toFixed(2);
    }