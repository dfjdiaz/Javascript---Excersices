let nota = prompt('¿Cuanto sacó en su examen?')

if(nota >= 0  && nota <= 2){
    alert('Su nota es muy deficiente')

}  else if (nota >=3  && nota <= 4){
    alert('Su nota es insuficiente')

} else if (nota >=5  && nota <= 6){
    alert('Su nota es suficiente')

} else if (nota === 7){
    alert('Su nota es notable')

} else if (nota >= 9 && nota <= 10){
    alert('Su nota es sobresaliente')

} else if (nota >= 9 && nota <= 10){
    alert('Su nota es sobresaliente')

} else if (nota > 10 || nota < 0){
    alert('Numero erroneo')

} else {
    alert('Introducir numero valido')

}