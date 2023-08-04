'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';
// circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < circles.length; i++) {
//     circles[i].style.backgroundColor = 'red';
// }

box.style.cssText = 'background-color: blue; width: 500px';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('I WAS HERE');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[0].before(div); вставляет перед
// hearts[0].after(div);\ вставляет после 


// wrapper.insertBefore(div, hearts[0]); 
// старая вариация до появления бефора афтер и препенд


// circles[0].remove();  удаляет выбраный элемент
// wrapper.removeChild(hearts[0]); // удаляет так же , указывай РОДИТЕЛЯ (wrapper) и выбираем элемент hearts[0]



// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0])


div.innerHTML = '<h2> Hello World</h2>'; 
// поместили внутрь блока div текст 

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin' ,"<h2>hello ADJACENT</h2>");