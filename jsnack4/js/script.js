

let numeri = [];
let numeroUtente = 0;
let cubo;
for (let i = 0; i < 3 ; i++) {
    numeroUtente = parseInt(prompt("inserisci un numero"));
    numeri.push(numeroUtente);
    console.log(numeri);
    cubo = numeri[i] ** 3; 
    console.log("cubo di ogni numero inserito:", cubo);   
    
} 



