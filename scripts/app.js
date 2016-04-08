$(document).ready(function() {
    'use strict';

    var nota = parseInt(prompt("Qual a sua nota?"));

    switch (nota) {
        case 10:
            notaMaxima();
            break;
        case 9:
            muitoBom();
            break;
        case 8:
            bom();
            break;
        case 7:
            bom();
        case 6:
            regular();
        default:
            estudeMais();
    }


    function notaMaxima() {
        window.alert('Parabéns você tirou a nota máxima!');
    }

    function muitoBom() {
        window.alert('Muito bom! Parabéns!');
    }
    function bom() {
    	window.alert('Bom!');
    }
	function regular() {
	    window.alert('Regular');
	}
	function estudeMais() {
    	window.alert('Ruim! Estude mais da próxima vez!');
	}

});
