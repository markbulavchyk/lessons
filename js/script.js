"use strict";

// to String

// 1) превращаем в строку 

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)

console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);


const fontSize = 26 + 'px';

console.log();

// To Number

//1) 

console.log(typeof(Number('4')));

//2) унарный плюс

console.log(typeof+('4'));

// 3)

console.log(typeof(parseInt('15px',10)));



let answ = +prompt('hello', '');


// To boolean

// 1 -й способ

let switcher = null;

if(switcher) {
    console.log('Working');
}

// 2-й способ

console.log(typeof(Boolean('4')));

// 3-й способ 

console.log(typeof(!!'4'));