/*Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt*/

let resultado1 = prompt('Ingrese un número');
let resultado2 = prompt('Ingrese otro número');
let suma = parseInt(resultado1) + parseInt(resultado2);
document.write("El resultado de la suma es: " + suma);