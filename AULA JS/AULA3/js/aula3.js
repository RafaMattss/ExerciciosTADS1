
var box = window.document.getElementById("oiii")

box.addEventListener("mouseenter" ,entrar)
box.addEventListener("mouseleave", sair)
box.addEventListener("click", clicar)


function entrar(){
    box.style.background = "yellow"
}
function sair(){
    box.style.background = "green"
    box.innerText="Clique em mim"
}
function clicar(){
    box.innerText="Clicou!"
}
