let numero = prompt("inserisci un numero di 4 cifre");

let sommaCifre = 0;

if(numero.length === 4 && !isNaN(numero)) {
    for(let i = 0; i < numero.length; i++) {
        sommaCifre = sommaCifre + parseInt(numero[i]);
    }
    console.log(sommaCifre);
} else {
    console.log("inserisci un numero valido di 4 cifre");
}
    

