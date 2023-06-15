var n1 = 0
var n2 = 0
var test= 0
var test2 = 0
var result = 0
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var x = []
    var n1 = Number(document.getElementById('n1').value) 
    var n2 = Number(document.getElementById('n2').value) 
    if (n1 > n2){
        test = n1
        test2 = n2
    }
    else{
        test= n2
        test2 = n1
    }
    for (var i = test ;i >= test2 ; i--){
        x.push(i)
        document.getElementById('result').innerHTML = "Resultado:";
    }
    document.getElementById('result').innerHTML = "Resultado: "+x;
}