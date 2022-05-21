

let nombre = "Juan";
let producto = "Libro";

let primerNombre;

let primerApellido = "Vega", segundoApellido = "Nolasco";

/*
let producto = "Libro";
let producto = "libro";
No se puede volver a defirnir el mismo atributo
a una varible con el mismo nombre de una que ya haya existido

 let producto = "Libro";
 let producto = "libro1";

Pero si se puede usar la misma variable pero cambiandole el atributo
a esa variable
*/
let mensaje;
mensaje = 'Entrenamiento a las \'8:30\'';

//Concatenar
mensaje =   'Java' + 'Script';

let aprendiendo = "Aprendiendo", tecnologia = "JavaScript";

console.log(nombre);
console.log(mensaje);
console.log(aprendiendo +' '+ tecnologia); //Concatenacion ordinaria o antigua

console.log(`${aprendiendo} ${tecnologia}`); //Concatenacion con TemplateLiterals
