$(document).ready(function () {
    'use strict';
    console.log("for");
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    
    console.log("while");
    var i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
    
    do {
        console.log(i);
        i--;
    } while(i > 0);
});
