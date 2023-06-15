var nome = window.prompt("Digite seu nome:")
var idade = Number(window.prompt("Digite sua idade:"))
var cond
if (idade < 18) {
    cond = " não pode"
}
else if (idade>18) {
cond = " pode"
}
window.alert("Bem vindo "+nome +", Você tem "+idade+" e" +cond+" acessar o site")
