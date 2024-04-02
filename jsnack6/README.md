# CHIEDI UN NUMERO DI 4 CIFRE ALL UTENTE E CALCOLA LA SOMMA DI TUTTE LE CIFRE ALL' UTENTE

1. INPUT
  
   - [x] creare variabile con prompt per inserire un numero di 4 cifre
   - [x] creiamo variabile sommaCifre e gli diamo valore 0 (variabile flag)

2. LOGICA
   condizione

   se (la lunghezza del numero e di 4 cifre e se è un not NaN ovvero un numero)
     esegui il ciclo for nel quale
     
     creiamo variabile i = 0
     
     creiamo condizione dove i deve essere inferiore a numero.length ovvero 4

     al interno del ciclo iteriamo ogni cifra e e la convertiamo con parseInt e per ogni iterazione tramite questa somma:
     sommaCifre = sommaCifre + parseInt(numero[i]); 
     in questo caso i ++ però non incrementa il valore di i visto che vengono sommate le 4 cifre del numero.



