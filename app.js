var app = function() {
    'use strict'

    $('.escrever-comentario button').on('click', function(event) {
        var $input = $('.escrever-comentario input'); // Campo de texto
        var comentario = $input.val(); // Pega o valor digitado

        if (comentario !== "") {
            var $novoComentario = $('<p>'); // Cria um novo objeto jQuery de parágrafo 
            $novoComentario.text(comentario); // Coloca no parágrafo o texto digitado 
            var $comentarios = $('.comentarios'); // objeto jQuery de seção de comentários
            $comentarios.append($novoComentario); // Adiciona ao final da seção o novo parágrafo com o comentário
        }
    });
};

$(document).ready(app);
