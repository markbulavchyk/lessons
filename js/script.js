"use strict";
// alert('Hello');
// const result = confirm('are you here?');
// console.log(result);

// const answer = prompt('are you have 18?', ''); // что бы не ответил пользователь это будет строка . STRING 
// console.log(typeof(answer)); // оператор typeof () проверяет на тип данных и выводит в консоле
// console.log(answer +5);

const answers = [];

answers[0] = prompt('What is your first name?', ''),
answers[1] = prompt('What is your second name?', '');
answers[2] = prompt('How old are you', '');

document.write(typeof(answers));