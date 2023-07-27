"use strict";

function showFirstMessage(text) {
    console.log(text);
}
showFirstMessage('');

function calc (a, b) {
    return (a + b);
    
}

console.log(calc(4 , 3));


function ret() {
    let num = 50;

    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger =  () => {
    console.log('log');
};