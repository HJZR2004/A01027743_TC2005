/* Julian Ramirez*/

/*Escribe una función que reciba una cadena de texto y
 regrese una nueva con la primer letra de cada palabra en mayúscula.*/

function firstCapital(text = "hola mundo") {
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);}
    let together = words.join(" ");
    console.log(together);
    return;}


firstCapital()
