
$(document).ready(function () {
    console.log("Primeiro");
    $('.duploClique').on('dblclick', function () {
        console.log("Segundo");
    });
    console.log("Terceiro");
});