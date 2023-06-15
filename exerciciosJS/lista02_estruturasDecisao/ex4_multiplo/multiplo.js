var n1 = 0
var n2 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var test = 0
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var mult= n1%n2
    if (mult == 0){
        test = " é multiplo"
    }
    else{
        test = " não é multiplo"
    }
    document.getElementById('result').innerHTML = test
}