"use strict";

let t = 0; 
function f1() {
    t++
    console.log(t);
    if (t === 10) {
        return;
    }
    f1()
}
// f1();

function f2 () {
    let out = '';
    for (let i = 1; i <= 30; i++) {
        out += i + ' ';
    }
    console.log(out);
}

// f2();

let i = 0;
let out = '';
function f3 () {
    i++;
    out += i + ' ';
    if (i >= 30) return;
    f3();
}

f3();

console.log(out);

// лицо с низкой соц. ответственностью 


function randomIntegar (min, max) {
    // случайное число от min до (max + 1)
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


let s1 = 0;
function moneyRecursion () {
    let m = randomIntegar(0,100);
    s1 += m;
    console.log('sum: ' + s1);
    if (s1 >= 300) return;
    moneyRecursion()
}
// moneyRecursion()

function moneyCycle() {
    let s2 = 0;
    while (true) {
        let m = randomIntegar(0,100);
        s2 += m;
        console.log('sum: ' + s2);
        if (s2 >= 300) return;
    }
}
moneyCycle()



// факториал (произведение чисел)

// факториал 5 

// 1 * 2 * 3 * 4 * 5

function fact(n) {
    let s = 1;
    for (let i = 1; i <= n; i++) {
        s = s * i;
    }
    return s
}
console.log(fact(5));


let s = 1;

function fact2(n) {
    if (n == 0) return;
    s = s * n;
    fact2(n-1)
}
fact2(5)
console.log(s);

function factorial (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const number = 5;
const result = factorial(number)

console.log('Факториал числа:' + number + 'равен' + result);