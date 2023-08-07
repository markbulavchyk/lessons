'use strict';

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoADV = document.querySelectorAll('.promo__adv');
for (let i = 0; i < promoADV.length; i++) {
    promoADV[i].remove();
};
// Удалил рекламу
// for (let i = 0; i < promoADV.length; i++) {
//     promoADV[i].innerHTML = ''; // удаляем при помощи innerHTML
// };
// удаляем рекламу при помощи forEach

// promoADV.forEach(item => {
//     item.remove();
// })

const promoGenre = document.querySelector('.promo__genre');
// promoGenre.innerHTML = 'драма';
promoGenre.textContent = 'драма';
// promoGenre.replaceWith('драма');
// Изменил жанр 


const promoBG = document.querySelector('.promo__bg');
promoBG.style.cssText = 'background-image: url(img/bg.jpg);'
// document.querySelector('.promo__bg').style.cssText = 'background-image: url(img/bg.jpg);'
// Изменить задний фон


const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = '';
//очищаем елемент МовиЛист

// for (let i = 0; i < document.querySelectorAll('.promo__interactive-item').length; i++) {
      
// }

movieDB.movies.sort();

// console.log(document.querySelector('.promo__bg').innerHTML);
// можем получить элементы верстки в консоль

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    
    `;
});

