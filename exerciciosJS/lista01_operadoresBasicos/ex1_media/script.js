var n1 = 0
var n2 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var result = (n1 + n2) / 2
    document.getElementById('result').innerHTML = result

    
}