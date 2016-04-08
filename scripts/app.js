
$(document).ready(function () {
    console.log("Esta mensagem será impressa assim que a página estiver carregada");
});

setTimeout(function() {
    console.log("Após 3 segundos, esta mensagem aparecerá")
}, 3000);

console.log("Esta mensagem será mostrada primeiro");