// chiedere per 10 volte di stamapare un numero all utente 
// e fare la somma dei numeri

let numeri = [];

let somma = 0;

for(let i = 0; i < 10; i++) {
    
    let chiediNumero = parseInt(prompt("inserisci un numero"));
    numeri.push(chiediNumero)
    console.log(numeri);
   
    somma += numeri[i];
    console.log("somma parziale dei numeri:", somma);
}


console.log("somma totale", somma);