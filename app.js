var app = function() {
    'use strict'
    
    $('.escrever-comentario button').on('click', function(event) {
    	var $novoComentario = $('<p>').text('Este é um novo comentário!');
    	$('.comentarios').append($novoComentario);
    });
};

$(document).ready(app);
