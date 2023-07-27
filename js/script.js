"use strict";

// Условия if - если , else - если 2 , если неверное условие if 

// const hamburger = 5;
// const fries = undefined;

// if (hamburger && fries) {
//     console.log('i am full');
// };

// console.log(1 && 0); 
// console.log(1 && 5); 
// console.log(null && 5); 
// console.log(0 && 'jnrqqjirq'); 

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// i + , ili menshe
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Not hungry');
} else {
    console.log('We go');
};
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

console.log(!0);

let johnReport,
    alexReport,
    samReport,
    mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);



let hamburgerA;
const friesA = 3;
const colaA = 0;
const nuggetsA = 2;


if (hamburgerA && colaA || friesA === 3 && nuggetsA) {
   console.log('Done!')
   console.log((hamburgerA && colaA || friesA === 3 && nuggetsA))
}



