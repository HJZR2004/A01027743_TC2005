/* Julian Ramirez.*/ 

/* Escribe una función que tome una lista de cadena de textos
y devuelva una nueva lista con todas las cadenas 
en orden alfabético.*/
function stringSort() {
    let string = "hola mundo soy julian";
    let words = string.split(' ');
    let sorted=[];
    words.forEach(word => {let sortedWord = word.split('').sort().join('');
        sorted.push(sortedWord);});
    let final=sorted.join(' ');
    console.log(final);}

stringSort()