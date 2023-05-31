/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/

let numero = prompt('Ingrese un número');

if(numero %2 ===0){

    document.getElementById('resultado').textContent = numero + "  " + 'en efecto, es divisible por 2';
}
else {
    document.getElementById('resultado').textContent = 'Ese valor no es  divisible por 2';

}