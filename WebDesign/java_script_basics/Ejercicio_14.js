/* Julian Ramirez.*/ 

/* Escribe una función que tome un número y devuelva verdadero
si es una potencia de dos, falso de lo contrario.*/
function powerTwo(a) {
    if (a > 0 && Math.log2(a) % 1 === 0) {
        console.log(a + ' is a power of two');} 
    else{
        console.log(a + ' is not a power of two');}}

powerTwo()