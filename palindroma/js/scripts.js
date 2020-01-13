// Scrivi una funzione per capire se la parola è palindroma

// Soluzione 1

// function isPalindrome(parola)
// {
//     var parolaBase = parola.split("").reverse().join("");
//
//     if (parolaBase === parola){
//         return true;
//     } else {
//         return false;
//     }
// }
//
// var parola1 = isPalindrome("lorenzo");
// var parola2 = isPalindrome("anna");
//
// console.log(parola1);
// console.log(parola2);


// Soluzione 2

var parola = prompt("inserisci una parola");

var parolaOk = [];
var parolaRev = [];

var counter=0;

for (var i = 0; i < parola.length; i++) {
  parolaOk.push(parola[i])
}

for (var i = 0; i < parola.length; i++) {
  parolaRev.push(parola[i])
}

var reversed = parolaRev.reverse();

for (var i = 0; i < parolaOk.length; i++) {
  if (parolaOk[i] == parolaRev[i]) {
    counter++
  }
}

if (counter == parolaOk.length) {
  console.log("Ok! Le parole sono palindrome");
}
else {
  console.log("No! Le parole non sono palindrome");
}

console.log(parolaOk);
console.log(parolaRev);
