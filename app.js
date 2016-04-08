var app = function() {
    'use strict'
    
    $('.escrever-comentario button').on('click', function(event) {
    	$(".comentarios").append("<p>Este é um novo comentário!</p>");
    });
};

$(document).ready(app);
