var n1 = 0
var n2 = 0
var resultado = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var resultado = ((n1*1) + (n2*2)) / 3
    document.getElementById('result').innerHTML = resultado.toFixed(0)
}