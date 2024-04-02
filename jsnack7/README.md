# CALCOLA LA SOMMA E LA MEDIA DEI PRIMI 10 NUMERI

1. INPUT
   - [x] creare array costituito da 10 numeri
   - [x] creare variabile flag sommaNumeri = o
   - [x] creare variabile flag per media
   - [x] creare costante per calcolare la media che si basa sulla lunghezza del nostro array visto che per calcolarte la media di 10 numeri come in questo caso si devono sommare tutti numeri presenti nell arrey e poi dividerli per il loro numero totale che in questo caso è 10

2. LOGICA

  ciclo for
    creiamo variabile i = 0;
    condizione d uscita ovvero i deve essere minore di numeri.length(lunghezza del nostro array = a 10);
    sommaNumeri = sommaNumeri + numeri[i] ovvero partendo da 0 visto che sommaNumeri inizialmente ha questo valore verra sommata a 1 dunque sommaNumeri = 1 
    Secondo giro
    sommaNumeri 1 sarà addizionata a numeri[i] che ora ha acquisito il valore 2 dunque sommaNumeri diventa 3
    Terzo giro 
    sommaNumeri 3 sarà addizionata a numeri[i] che ora è 3 dunque sommaNumeri diventerà 6
    ecc...

  Fuori da for
  la media sarà uguale a sommaNumeri(valore finale) diviso numeri.lenght ovvero nNum.

3. OUTPUT

  nella console stampiamo il valore della media    