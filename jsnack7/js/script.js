const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sommaNumeri = 0;

let media;

const nNum = numeri.length;

for(let i = 0; i < numeri.length; i++) {
    sommaNumeri += numeri[i];
    console.log(sommaNumeri);
}

media = sommaNumeri / nNum;

console.log(`la media dei numeri inseriti è ${media}`)