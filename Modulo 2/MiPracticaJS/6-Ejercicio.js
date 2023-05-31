/*6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/

let numero1 = prompt('Ingrese un número');
let numero2 = prompt('Ingrese otro número');

if(parseInt(numero1)>parseInt(numero2)){
    document.getElementById("resultado").textContent = "El mayor numero es" + " " + numero1 ;
}
else if(parseInt(numero1)<parseInt(numero2)){ 
    document.getElementById("resultado").textContent = "El mayor numero es" + " " + numero2 ;

   }
else{
    let iguales = 'Son iguales'
    document.getElementById("resultado").textContent = iguales;
    

}1