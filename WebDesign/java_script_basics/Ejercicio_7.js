/* Julian Ramirez*/

/*Escribe una función que reciba un número, y regrese 
una lista con todos sus factores. 
Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12]. */
function numberFactor(a){
    let factors=[];
    for(let i=0;i<=a;i++){
        if(a % i == 0){
            factors.push(i);}}
        console.log("Factors: " + factors);}

numberFactor()