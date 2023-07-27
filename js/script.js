"use strict";
function first () {
    setTimeout(function(){
        console.log(1);
    },500); // 500 милисекунд
}
function second () {
    console.log(2);
}
first();
second();

function learnJS(lang , callback) {
    console.log(`я учу: ${lang}`);
    callback();
}
learnJS('JavaScript', function() {
    console.log('я прошел етот урок!');
})  



console.log(isNaN('s'));


