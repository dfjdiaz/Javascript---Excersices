/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
let numero1 = prompt('Ingrese un número');
let numero2 = prompt('Ingrese otro número');
let numero3 = prompt('Ingrese otro número');

if(parseInt(numero1)>parseInt(numero2) && parseInt(numero1)>parseInt(numero3) ){
    document.getElementById("resultado").textContent = "El mayor numero es" + " " + numero1 ;
}
else if(parseInt(numero1)<parseInt(numero2) && parseInt(numero2)>parseInt(numero3) ){ 
    document.getElementById("resultado").textContent = "El mayor numero es" + " " + numero2 ;

   }
   else if(parseInt(numero1)<parseInt(numero3) && parseInt(numero3)>parseInt(numero2) ){ 
    document.getElementById("resultado").textContent = "El mayor numero es" + " " + numero3 ;

   }
else{
    let iguales = 'No hay un solo numero mayor, elegiste dos iguales.'
    document.getElementById("resultado").textContent = iguales;
    

}
