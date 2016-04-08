
var main = function () {
    'use strict';

    var $helloWorld = $("<div>").text("Hello world!").hide();
    var $goodbyeWorld = $("<div>").text("Goodbye world!").hide();
    $("body").append($helloWorld);
    $helloWorld.slideDown(2000, function () {
        //Adicionar "Goodbye World!" após a execução de slideDown
        $("body").append($goodbyeWorld);
        $goodbyeWorld.fadeIn();
    });

}

$(document).ready(main);