'use strict';

// touchstart 

// touchmove

// touchend

// touchenter

// touchleave 

// touchcancel

window.addEventListener('DOMContentLoaded' , () => {
    const box = document.querySelector('.box');
    box.style.cssText = `width: 150px;
                     height: 100px;
                     background-color: red`;

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches);
    })

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    })

});

// touches 
// targetTouches
//changesTouches - пальцы которые совершили указанное действие 

