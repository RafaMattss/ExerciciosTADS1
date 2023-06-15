var n1 = 0
var resultado = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var n1 = Number(document.getElementById('n1').value)
    var resultado = (n1 * 1.609)
    document.getElementById('result').innerHTML = resultado.toFixed(1) + "Km"
}
