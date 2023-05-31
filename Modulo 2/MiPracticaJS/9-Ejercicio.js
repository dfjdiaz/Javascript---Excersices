/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
*/

let frase = prompt('Ingrese el texto que desee:');

let cantidadCaracteres = frase.length;
document.getElementById('resultado').textContent =   frase + "  " + 'tiene la siguiente cantidad de caracteres' + ' ' + cantidadCaracteres;
console.log(cantidadCaracteres);


var texto = "Hola mundo";
var vocales = "";

for (var i = 0; i < texto.length; i++) {
  var letra = texto[i].toLowerCase();
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vocales += letra;
  }
}

console.log(vocales); 