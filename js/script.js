"use strict";

let a = 5,
    b = a;
b = b + a;

// console.log(b);



const obj = {
    a: 5,
    b: 1
};
// const copy = obj; // передает не копию объекта, а ссылку  самого объекта 

// такое поведение называется передача по ссылке 
// copy.a = 10;

function copy(mainObj) {
    let objCopy = {};
    let key;

    for (key in mainObj) { // где кей будет копаться в мейн обжект столько раз сколько в ней есть свойст
        objCopy[key] = mainObj[key];
    }

    return objCopy
};

const numbers = { // объект , копию которого мы будем создавать
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(numbers);


const add = {
    d: 17,
    e: 20
};

const clone = Object.assign(numbers, add);

clone.d = 20
// console.log(add);
// console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'dsadas'

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2,5,7];

log(...num)

const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);