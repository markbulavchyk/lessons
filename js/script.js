"use strict";

const arr = [1,32,23,6,8];
arr.sort(compareNum);
console.log(arr);

function compareNum (a,b) {
    return a - b;
}

arr.pop()
// arr.push(10)
console.log(arr);

for (let value of arr) {
    console.log(value);
}

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
})

const str = prompt('','');
const products = str.split(', ');
products.sort();

console.log(products.join(';'));



const arr = [1,2,3,4,5];
arr.pop(); // pop - удаляет последний элемент массива 
arr.push('qwerty'); // push добавляет элемент в конец списку в скобках push('ЭЛЕМЕНТ')
console.log(arr);