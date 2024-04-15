/*  Julian Ramirez.*/


/* Escribe una función que quite los elementos duplicados de un 
arreglo y regrese una lista con los elementos que quedan. 
Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]*/
function findDuplicates() {
    let elements = [1, 0, 1, 1, 0];
    let uniqueElements = {};
    let duplicates = [];

    for (let i = 0; i < elements.length; i++) {
        let temporal = elements[i];
        if (!uniqueElements[temporal]) {
            uniqueElements[temporal] = true;} 
        else if(!duplicates.includes(temporal)) {   
            duplicates.push(temporal);}}

    console.log("Duplicates: " + duplicates)}
    
    findDuplicates()
