$(document).ready(function () {
    'use strict';
    
    var arrayNumerico = [0,1,2,3,4,5,6];
    var arrayString = ["laranja", "maça", "banana", "pera", "manga"];
    var arrayMisto  = [1,2,"teste",4,5];
    
    // Acessando os elementos de um array
    console.log(arrayNumerico[2]);
    console.log(arrayString[3]);
    
    // Iterando pelo array
    for(var i=0; i < arrayNumerico.length; i++) {
        console.log(arrayNumerico[i]);
    }
    
    // forEach
    arrayString.forEach(function(elemento) {
       console.log(elemento);
    });
    
    // Array com diferentes tipos de elementos
    arrayMisto.forEach(function(elemento) {
       console.log(elemento);
    });
    
    // Adicionando elementos a um array
    arrayNumerico.push(7);
    arrayNumerico.forEach(function(elemento) {
       console.log(elemento); 
    });
    
    // Excluíndo elemento de um array
    arrayNumerico.splice(0, 1);
    arrayNumerico.forEach(function(elemento) {
       console.log(elemento); 
    });
    
});
