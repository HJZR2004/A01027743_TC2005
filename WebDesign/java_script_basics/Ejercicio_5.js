/* Julian Ramirez*/
/*Escribe una función que calcule el máximo común divisor de dos números.*/
function greatestDivisor(a,b){
    while (b!=0 ){
        let euclides = b;
        b=a%b;
        a=euclides;}
    console.log("Greatest common divisor: " + a)}

greatestDivisor()
