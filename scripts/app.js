
$(document).ready(function() {
   var $novaUL = $("<ul>");
   var $novoParagrafo = $("<p>");
   $novoParagrafo.text("Este é um parágrafo");
   $("footer").append($novoParagrafo);
   
   var $li1 = $("<li>").text("Primeiro item");
   var $li2 = $("<li>").text("Segundo item");
   var $li3 = $("<li>").text("Terceiro item");
   
   $novaUL.append($li1);
   $novaUL.append($li2);
   $novaUL.append($li3);
   
   $("main").append($novaUL);
   
   var $rodapePrimeiroFilho  = $("<p>").text("Sou o primeiro elemento filho de footer");
   $rodapePrimeiroFilho.appendTo($("footer"));
   
   
});