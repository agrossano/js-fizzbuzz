/* DESCRIZIONE:
Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”. */


/*creo un ciclo che stampi numeri da 1 a 100 */

var selector;
for (i = 1; i <= 100; i++) {
  /*se l'attuale iterazione fornisce 0 come resto sia della divisione per 3 e 5 stampo fizzbuzz*/
  if (i % 3 == 0 && i % 5 == 0) {
    selector = 'Fizzbuzz';
    /*se  l'attuale iterazione fornisce 0 come resto della divisione per 3 assegno fizz alla var selector*/
  } else if (i % 3 == 0) {
    selector = 'Fizz';
    /*se  l'attuale iterazione fornisce 0 come resto della divisione per 5 assegno fizz alla var selector*/
  } else if (i % 5 == 0) {
    selector = 'Buzz';
    /* in tutti gli altri caso assegno alla variabile l'index corrente */
  } else {
    selector = i;


    /* stampo su pagina la variabile aggiunngendone ogni volta una copia con l'iterazione aggiornata */
  };
  document.getElementById('fizzbuzz').innerHTML += selector + '<br>';
}


