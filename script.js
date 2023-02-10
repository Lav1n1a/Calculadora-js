var n1 = document.querySelector('#number1');
var n2 = document.querySelector('#number2');
var resultado = document.querySelector('span');

function somar() {
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}
function subtrair() {
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value);
}
function dividir() {
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value);
}
function multiplicar() {
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value);
}


