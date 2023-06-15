var n1 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var test = 0
    var n1 = Number(document.getElementById('n1').value)
    var mult= n1%2
    if (mult == 0){
        test = " é par"
    }
    else{
        test = " é ímpar"
    }
    document.getElementById('result').innerHTML = test
}