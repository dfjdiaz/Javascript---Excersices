/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/


let numero = parseInt(prompt('Insert coin '));

if (numero % 2 === 0) {
    document.getElementById('resultado').textContent = 'Ese valor es divisible por 2';
   
} else if (numero % 3 === 0) {
    document.getElementById('resultado').textContent = 'Ese valor es divisible por 3';
  
} else if (numero % 5 === 0) {
    document.getElementById('resultado').textContent = 'Ese valor es divisible por 5';
    
} else if (numero % 7 === 0) {
    document.getElementById('resultado').textContent = 'Ese valor es divisible por 7';
    
} else if{
    document.getElementById('resultado').textContent = 'Ese valor no es divisible por ninguno';
}

/*Cuando utilizas una expresión booleana en un caso del switch, la comparación estricta se realiza entre el valor de la expresión (true o false) y el valor del caso. Dado que estos valores no son idénticos a numero, no se produce una coincidencia y se ejecuta el caso predeterminado.*/