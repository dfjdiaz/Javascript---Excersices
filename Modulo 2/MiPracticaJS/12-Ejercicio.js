let edad = prompt('Ingrese su edad')

if (edad>=18){
    document.getElementById('resultado').textContent = 'Ya podes manejar con tus ' + edad + ' pirulos'

} else {
    document.getElementById('resultado').textContent = 'Sorry capo tomate un bondi'
}  