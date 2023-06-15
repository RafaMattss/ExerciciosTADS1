var n1 = 0
var n2 = 0
var result = 0
var btnSomar= (document.getElementById('btnSomar'))
var btnSub = (document.getElementById('btnSub'))
var btnMult = (document.getElementById('btnMult'))
var btnDiv = (document.getElementById('btnDiv'))

btnSomar.addEventListener("click", somar);
btnSub.addEventListener("click", subtrair);
btnMult.addEventListener("click", multiplicar);
btnDiv.addEventListener("click", dividir);

function somar(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var result = (n1 + n2) 
    document.getElementById('result').innerHTML = result
}
function subtrair(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var result = (n1 - n2) 
    document.getElementById('result').innerHTML = result
}
function multiplicar(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var result = (n1 * n2) 
    document.getElementById('result').innerHTML = result
}
function dividir(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var result = (n1 / n2) 
    document.getElementById('result').innerHTML = result
}