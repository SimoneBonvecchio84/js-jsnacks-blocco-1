
let numeriDisp = [];

for (let i = 0; i < 6; i++) {
    let insNum = parseInt(prompt("inserisci un numero"));

    if(insNum % 2 !== 0) {
        numeriDisp.push(insNum);
        console.log(numeriDisp);
        console.log("numero dispari inserito nell'array");
    } else {
        console.log("il numero è pari dunque non può essere inserito nell'array");
        console.log(numeriDisp);
    }
}

