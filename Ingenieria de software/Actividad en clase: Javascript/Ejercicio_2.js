/*Julian Ramirez  A01027743. */

/*Escribe una función que implemente el algoritmo 
'bubble-sort' para ordenar una lista de números.*/

function  bubbleSort(){
    let array=[5,6,8,9,1];
    let temporal;
    for(let i=0;i<array.length-1;i++){
        for(let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                temporal=array[j];
                array[j]=array[j+1];
                array[j+1]=temporal;}}}
    console.log("Bubble sort: " + array);
    return;}

bubbleSort()