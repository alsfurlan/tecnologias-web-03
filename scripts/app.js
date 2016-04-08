/* 
 Comentários de múltiplas linhas
 */
// Comentários de uma linha

var app = function () {
    'use strict';

    var adicionarComentario = function () {
        var $input = $('.escrever-comentario input'); // Campo de texto
        var comentario = $input.val(); // Pega o valor digitado

        if (comentario !== '') {
            var $novoComentario = $('<p>'); // Cria um novo objeto jQuery de parágrafo 
            $novoComentario.text(comentario); // Coloca no parágrafo o texto digitado 
            $novoComentario.hide();
            var $comentarios = $('.comentarios'); // objeto jQuery de seção de comentários
            $comentarios.append($novoComentario); // Adiciona ao final da seção o novo parágrafo com o comentário
            $novoComentario.fadeIn();
            $input.val(''); // Limpa valor do campo de texto
        }
    };

    $('.escrever-comentario button').on('click', function (event) {
        adicionarComentario();
    });

    $('.escrever-comentario input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            adicionarComentario();
        }
    });
};

$(document).ready(app);
