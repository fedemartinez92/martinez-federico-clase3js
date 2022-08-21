let pregunta = prompt("Quieres saber cuanto te ahorrarias si dejas de fumar? Responda si o no");


if(pregunta.toLowerCase() == "si"){
    let periodo = parseInt(prompt("Sobre cuantos años quiere realizar el calculo?"));
    let cigarillo = parseInt(prompt("Cuantos cigarrillos por dia fumas?"));
    let precio = parseInt(prompt("Ingrese precio unitario del cigarrillo"));
    let ahorro = cigarillo * precio;
    let diasano = 365;
    for(let i = 1; i <= periodo; i++){
    
    console.log(`en ${i} años ustedes ahorrara $${ahorro*i*diasano}`);}
}
else{
    console.log("Recuerde que fumar es perjudicial para la salud");
}