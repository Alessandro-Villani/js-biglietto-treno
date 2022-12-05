console.log('JS OK');

/*---------------------------------------------------------------------------------------

BIGLIETTI TRENO

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

---------------------------------------------------------------------------------------*/

/*-------------------------------------TO DO---------------------------------------------

1. Initialize target
2. Set price/km in a variable called kmPrice
3. Set a variable containing the value of underage discount called underageDiscount
4. Set a variable containing the value of over 65 discount called over65Discount
5. Ask user travel kilometers and store it in userKilometers variable
6. Ask user age and store it in userAge variable
7. userKilometers and userAge data validation
8. Calculate standard price and store in variable price
9. Verify if the user is underage or over 65
    9a. if user underage apply underage discount and store in variable price
    9b. if user over 65 apply over 65 discount and store in variable price
10. Print final price on page
----------------------------------------------------------------------------------------*/

//1. Initialize target

const targetElement = document.getElementById('target');
////console.log(targetElement);

//2. Set price/km in a variable called kmPrice

const kmPrice = 0.21;
////console.log(kmPrice);

// 3. Set a variable containing the value of underage discount called underageDiscount

const underageDiscount = 0.2;
////console.log(underageDiscount);

// 4. Set a variable containing the value of over 65 discount called over65Discount

const over65Discount = 0.4;
////console.log(over65Discount);
