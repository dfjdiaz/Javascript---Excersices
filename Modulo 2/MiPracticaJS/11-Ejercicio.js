/*Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/

let numero = parseInt(prompt('Ingrese un número cualquiera'));
let divisibles = '';

if (numero % 2 === 0) {
    divisibles += '2, ';
}

if (numero % 3 === 0) {
    divisibles += '3, ';
}

if (numero % 5 === 0) {
    divisibles += '5, ';
}

if (numero % 7 === 0) {
    divisibles += '7, ';
}

if (divisibles !== '') {
    divisibles = divisibles.slice(0, -2); // Eliminar la última coma y espacio
    document.getElementById('resultado').textContent = 'El ' + numero + ' es divisible por ' + divisibles + '.';
} else {
    document.getElementById('resultado').textContent = 'El ' + numero + ' no es divisible por ninguno de los cuatro.';
}
