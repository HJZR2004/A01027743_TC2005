/* Julian Ramirez.*/ 

/* Escribe una función que revise si una cadena de texto 
es un palíndromo o no.*/ 


function palindrome() {
    let string = "anita lava la tina"
    let letters = string.toLowerCase().replace(/\s/g, '');
    let longitud = letters.length;
    let first = 0;
    let last = longitud - 1;

    while (first < last) {
        if (letters[first] !== letters[last]){
            console.log(string + " is not a palindrome")
        return;}
        first++;
        last--;}
    console.log(string + " is a palindrome")}


palindrome();
