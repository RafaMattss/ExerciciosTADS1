var n1 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var x = []
    var n1 = Number(document.getElementById('n1').value) 
    for (var i = n1 ;i >=0 ; i--){
        x.push(i)
        document.getElementById('result').innerHTML = "Resultado:";
    }
    document.getElementById('result').innerHTML = "Resultado: "+x;
}