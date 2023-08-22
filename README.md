# Griglia Campo Minato

## Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Generazione griglia quadrata

1. definiamo un contenitore con dimensioni fisse
2. contiamo da 1 a 100 e per ogni ciclo:
   - creiamo una cella condimensioni fisse
     - la larghezza la valutiamo con il calc (100% / 10)
     - l'altezza con aspect ratio 1
   - associamo l'indice alla singola cella

## quando l'utente clissa su ogni cella, la cella cliccata si colora e manda un messaggio in console

1. associamo all'evento click sulla cella un codice
   - usiamo una classe per cambiare il colore
   - usiamo il console log sull'indice associato alla cella

## Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
