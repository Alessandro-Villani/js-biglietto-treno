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

// EXTRA target

const targetName = document.getElementById('name');
const targetSurname = document.getElementById('surname');
const targetNameSurname = document.getElementById('namesurname');
const targetAge = document.getElementById('age');
const targetAge2 = document.getElementById('age-2');
const targetDate = document.getElementById('date');
const targetTime = document.getElementById('time');
const targetKm = document.getElementById('km');
const targetKm2 = document.getElementById('km-2');
const targetBasePrice = document.getElementById('base-price');
const targetDiscount = document.getElementById('discount');


//EXTRA initialize date

const date = new Date();

//2. Set price/km in a variable called kmPrice

const kmPrice = 0.21;
////console.log(kmPrice);

// 3. Set a variable containing the value of underage discount called underageDiscount

const underageDiscount = 0.2;
////console.log(underageDiscount);

// 4. Set a variable containing the value of over 65 discount called over65Discount

const over65Discount = 0.4;
////console.log(over65Discount);

// 5. Ask user travel kilometers and store it in userKilometers variable

const userKilometers = parseInt(prompt('Inserisci km da percorrere', '50').trim());
////console.log(userKilometers);

// 6. Ask user age and store it in userAge variable

const userAge = parseInt(prompt('Inserisci età', '20').trim());
////console.log(userAge);

// EXTRA Ask user name and surname

const userName = prompt('Inserisci nome', 'Alessandro');
console.log(userName);
const userSurname = prompt('Inserisci cognome', 'Villani');
console.log(userSurname);


// 7. userKilometers and userAge data validation

let isValid = true;

if (isNaN(userKilometers) || userKilometers < 0){
    isValid = false;
    alert('Kilometraggio non valido');
}

if (isNaN(userAge) || userAge < 0) {
    isValid = false;
    alert('Età non valida');
}

if (isValid){

    // 8. Calculate standard price and store in variable price

    let price = userKilometers * kmPrice;
    ////console.log(price);

    // 9. Verify if the user is underage or over 65

    // 9a. if user underage apply underage discount and store in variable price
    if (userAge < 18){
        targetBasePrice.innerHTML = `Prezzo base: <span class="text-danger text-decoration-line-through"><b>${price.toFixed(2)} €</b></span>`;
        targetDiscount.innerText = "Sconto: " + (underageDiscount*100) + '%';
        price -= price*underageDiscount;
        ////console.log(price);
    } 
    // 9b. if user over 65 apply over 65 discount and store in variable price
    else if (userAge >= 65){ 
        targetBasePrice.innerHTML = `Prezzo base: <span class="text-danger text-decoration-line-through"><b>${price.toFixed(2)} €</b></span>`;
        targetDiscount.innerText = "Sconto: " + (over65Discount*100) + '%';
        price -= price*over65Discount;
        ////console.log(price);    
    }

    // 10. Print final price on page

    targetElement.innerText = price.toFixed(2);

    //EXTRA Print

    targetName.innerText = userName.toUpperCase();
    targetSurname.innerText = userSurname.toUpperCase();
    targetNameSurname.innerText = `${userName.toUpperCase()} ${userSurname.toUpperCase()}`;
    targetAge.innerText = userAge;
    targetAge2.innerText = userAge;
    targetDate.innerText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    targetTime.innerText = `${date.getHours()}:${date.getMinutes()}`; 
    targetKm.innerText = userKilometers;
    targetKm2.innerText = userKilometers;

}