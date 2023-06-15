/*var btn = document.getElementById("btnCalcular");
var result = document.getElementById('result')
btn.addEventListener("click", executar);

function executar(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);

    if (n1>n2){
        result.innerText=mdc(n1, n2)

    }else{
        result.innerText=mdc(n2, n1)

    }

}

function mdc(maior, menor){
    for(let ctrl=menor;ctrl>=1; ctrl--){
        if(menor%ctrl==0 && maior%ctrl==0){
            return ctrl

        }

    }

}*/


/*var btn = document.getElementById("btnCalcular");
var result = document.getElementById('result')
btn.addEventListener("click", executar);

function executar(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    if (n1>n2)
        result.innerText=mdc(n1, n2)
    else
      result.innerText=mdc(n2, n1)
}

function mdc(maior, menor){
    while(menor!=0){
        let aux = maior
        maior = menor
        menor = aux%menor
    }
    return maior
}
*/

/*var btn = document.getElementById("btnCalcular");
var result = document.getElementById('result')
btn.addEventListener("click", executar);


function executar(){
    let n1 = Number.parseInt(document.getElementById('n1').value)
    let res = document.getElementById('result')
    let ctrl = 1
    let fat = 1

    res.innerText= calc(res,n1,fat,ctrl)
}

function calc(res,n1,fat,ctrl){
    if(n1 == 1 || n1 == 0){
        return res = 1
    }else 
    res = fat * ctrl
    if(ctrl == n1){
        return res
    }

    return calc(res,n1,res,ctrl+1)
}*/

/*var btn = document.getElementById("btnCalcular");
var result = document.getElementById('result')
btn.addEventListener("click", executar);


function executar(){
    let n1 = Number.parseInt(document.getElementById('n1').value)
    result.innerText= calc(n1)
}

function calc(n1){
    let result = 1
    while(n1>=1){
        result = result * n1
        n1--
    }
    return result
}*/

/*var btn = document.getElementById("btnCalcular");
var result = document.getElementById('result')
btn.addEventListener("click", executar);


function executar(){
    let n1 = Number.parseInt(document.getElementById('n1').value)
    result.innerText= calc(n1)
}

function calc(n1){
    let result = 1
    for (let i=n1;i>=1;i--){
        result=result*i
    }
    return result
}*/