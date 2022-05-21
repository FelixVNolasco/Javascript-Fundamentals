let nombre = "Felix";
let perro = "Kira";
let apellido = "Vega";
let segundoApellido = "Nolasco";

let msg = "Aprendiendo JavaScript";
let comida = "Enchiladas" + " ";
/*Estos metodos solo sirven para "Strings" y no otro tipo de datos
let numero = 100 ;
console.log (numero.length());

*/
console.log(nombre.length());
console.log(perro.concat(" Es genial"));
console.log(apellido.toUpperCase());
console.log(segundoApellido.toLowerCase());

console.log(msg.indexOf("JavaScript")); //Posicion de donde incia la palabra
console.log(msg.substring(0,11)); //Solo toma una parte del string
console.log(msg.slice(-10)); //Lo mismo que lo anterior pero tambien puede empezar desde el final del string
console.log (msg.split(' ')); //Busca en el String lo que tenga dentro del método y separa el String
console.log(msg.replace('JavaScript', 'C++'));
console.log(msg.includes("Aprendiendo")); //Busca si se encuentra o no la palabra en el String "TRUE o FALSE"

console.log(comida.repeat(10));