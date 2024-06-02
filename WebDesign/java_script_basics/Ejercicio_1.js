/*Julian Ramirez  A01027743. */

/*Escribe una función que encuentre el primer carácter de 
un cadena de texto que no se repite. 
Prueba tu función con: 'abacddbec'*/ 
function findChar() {
    let text = 'abacddbec';
    let count = [];

    for(let i=0;i<text.length;i++){
        count.push(text[i]);}

    
    for(let i=0;i<count.length;i++){ 
        for(let j=i+1;j<count.length;j++){
            if (count[i]===count[j]){
                console.log("The first value that is repeated is: " + count[j]);
            return;}}}}

findChar()