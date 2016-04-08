$(document).ready(function(){
    'use strict';
    
    var nota = parseFloat(prompt("Qual a sua nota?"));
    
    if(nota === 10) {
       window.alert('Parabéns você tirou a nota máxima!'); 
    } else if (nota == 10) {
        window.alert('Parabéns você tirou a nota máxima! [2]'); 
    } else if(nota >= 9 && nota < 10) {
       window.alert('Muito bom! Parabéns!');
    } else if(nota >= 7 && nota < 9) {
       window.alert('Bom!'); 
    } else if(nota >= 6 && nota < 7) {
       window.alert('Regular'); 
    } else {
        window.alert('Ruim! Estude mais da próxima vez!');
    }
});