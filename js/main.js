/* DESCRIZIONE:
Fizz Buzz test:
Scrivi un programma che stampi i numeri da 1 a 100, 
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”. */


/*creo un ciclo che stampi numeri da 1 a 100 */

for (i = 1; i <= 100; i++) {
  /*se l'attuale iterazione fornisce 0 come resto sia della divisione per 3 e 5 stampo fizzbuzz*/
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz');
    /*se  l'attuale iterazione fornisce 0 come resto della divisione per 3 stampo fizz*/
  } else if (i % 3 == 0) {
    console.log('Fizz');
    /*se l'attuale iterazione fornisce 0 come resto della divisione per 3 stampo buzz*/
  } else if (i % 5 == 0) {
    console.log('Buzz')
    /* in tutti gli altri caso stampo la cifra dell'attuale iterazione */
  } else {
    console.log(i);
  };
}
