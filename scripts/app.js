
var main = function() {
    'use strict';
    
    var $helloWorld = $("<div>").text("Hello world!").hide();
    $("body").append($helloWorld);
    $helloWorld.slideDown(200);
}

$(document).ready(main);