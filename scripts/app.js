$(document).ready(function() {
   
    // Estilo 1
    var helloWorld1 = function() {
    	alert('Hello world!');
    };

    helloWorld1();

    // Estilo 2
    var helloWorld2 = function helloWorld() {
    	alert('Hello world!');
    };

    helloWorld2();

    // Estilo 3
    function helloWorld3() {
    	alert('Hello world!');
    };

    helloWorld3();


});