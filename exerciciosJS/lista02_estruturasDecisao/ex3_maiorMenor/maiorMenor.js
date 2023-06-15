var n1 = 0
var n2 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var test = 0
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    if (n1 > n2){
        test = n1
    }
    else{
        test = n2
    }
    document.getElementById('result').innerHTML = test
}