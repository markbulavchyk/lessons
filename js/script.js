"use strict";

// const summ = +prompt('Введи суму долларов - которую хочеш поменять на грн','');

// function convert (summ) {
//     console.log(28 * summ + 'грн');
//     console.log('курс валют')
// }
// convert(summ);

const usdCurr = 28;
const eurCurr = 32;

function convert (amount, curr) {
    console.log(curr * amount);
}

//    500 - amount  *  usdCurr - curr
convert(500, usdCurr);
convert(500, eurCurr);
