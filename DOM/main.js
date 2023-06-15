//VAR: Escolpo global
var nome = document.querySelector('#nome').value
var bt = document.querySelector('#submit')
var end = document.querySelector('#endereco').value
var nas = document.querySelector('#nascimento').value

bt.addEventListener("click", abrir )

function abrir(){
    var nome = document.querySelector('#nome').value
    var end = document.querySelector('#endereco').value
    var nas = document.querySelector('#nascimento').value
    console.log(nome)
    console.log(end)
    console.log(nas)

}