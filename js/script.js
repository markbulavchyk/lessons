"use strict";

const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// console.log(btn);

// btn.onclick = function() {
//     alert('Click');
// }

// btn.onclick = function() {
//     alert('Second Click');
// }

// btn.addEventListener('click', () => {
//     alert('Click')
// });

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     // console.log('Click');
// });

// const deleteElement = (e) => {
//     console.log(e.target);
// };



// btn.addEventListener('click', deleteElement) // назначает обработчик
// btn.removeEventListener('click', deleteElement) // удаляет обработчик

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     }
//     console.log(i);
// };

// btn.addEventListener('click',deleteElement)
// console.log(i);

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
}
// btn.addEventListener('click',deleteElement)
// overlay.addEventListener('click',deleteElement)


btn.forEach(btn => {
    btn.addEventListener('click',deleteElement)
})


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
})