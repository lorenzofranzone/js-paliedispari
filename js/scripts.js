// Scrivi una funzione per capire se la parola è palindroma

function isPalindrome(parola)
{
    var parolaBase = parola.split("").reverse().join("");

    if (parolaBase === parola){
        return true;
    } else {
        return false;
    }
}

var parola1 = isPalindrome("lorenzo");
var parola2 = isPalindrome("anna");

console.log(parola1);
console.log(parola2);


// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
// Sommiamo i due numeri e
// dichiariamo chi ha vinto (controlliamo se la somma da pari o dispari).


var userChoice = prompt('Scegli pari o dispari');
console.log(userChoice);

var userNumber = parseInt(prompt('Scegli un numero fra 1 e 5'));
console.log(userNumber);

if (userChoice == 'pari') {
  var computerChoice = 'dispari';
  console.log(computerChoice);
}
else {
  var computerChoice = 'dispari';
  console.log(computerChoice);
}

computerNumber = getRandomNumber(1, 5);
console.log(computerNumber);

var somma = userNumber + computerNumber;
console.log(somma);


// Verifico se la somma è pari o dispari
if (somma % 2 == 0) {
  var result = 'pari';
}
else {
  var result = 'dispari';
}

if (result == userChoice) {
  console.log('Hai vinto');
}
else {
  console.log('Hai perso');
}


// Funzione Random
function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max, min + 1)) + min;
  return random;
}
