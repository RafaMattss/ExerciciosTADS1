var data = new Date()
var houra= data.getHours()
var dia = data.getDay()

if(houra <12){
    console.log("Bom dia!")
}
else if(houra <18){
    console.log("Boa tarde!")
}
else{
    console.log("Boa noite!")
}

switch(dia){
    case 0:
        console.log("Hoje é domingo!");
        break;
    case 1:
        console.log("Hoje é segunda-feira!");
        break;
    case 2:
        console.log("Hoje é terça-feira!");
        break;
    case 3:
        console.log("Hoje é quarta-feira!");
        break;
    case 4:
        console.log("Hoje é quinta-feira!");
        break;
    case 5:
        console.log("Hoje é sexta-feira!"); 
        break;
    default:
        console.log("Hoje é sábado!");
        break;
}