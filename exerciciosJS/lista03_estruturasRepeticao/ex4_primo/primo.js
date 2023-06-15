var n1 = 0
var result = 0
let x = []
var resultado = document.getElementById("result")
var btnCalcular = (document.getElementById('btnCalcular'))

btnCalcular.addEventListener("click", calcular);

function calcular(){
    var n1 = Number(document.getElementById('n1').value) 
    res = 1;
    for (var  i = 1;i <= n1; i++){
        res = n1%i 
        if (res !== 0){
            resultado.innerHTML="não é primo"
            break
            
        }
        else{
            resultado.innerHTML="é primo"
        }

    }

}