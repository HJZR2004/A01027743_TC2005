/* Julian Ramirez*/

/*
Escribe dos funciones: la primera que invierta un arreglo de números 
y regrese un nuevo arreglo con el resultado; la segunda que modifique el}
mismo arreglo que se pasa como argumento. 
No se permite usar la función integrada 'reverse'.*/
function arrayInverted(){
    let numbers  = [4,2,7,3];
    globalThis.invertedArray = [];
    for(let i=numbers.length-1;i>=0;i--){
        invertedArray.push(numbers[i]);}
    console.log("Array of numbers: " + numbers);
    console.log("Array inverted: " + invertedArray);
    return;}

function shakeArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];}
    console.log("Array shaken: " + array)
    return;}

arrayInverted()
shakeArray(array)