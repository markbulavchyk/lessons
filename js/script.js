"use strict";
/*
Задачи на работу с объектами
В этих заданиях мы с вами потренируемся работать с объектами. 
Это важный навык и нам нужно понимать как работают эти структуры.

У вас есть готовый объект с данными. 
Разработчик Х хочет написать часть функционала, но ему не хватает навыков. 
Выполните часть заданий за него.

Задачи:

1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.


Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно

2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)

*/
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: { 
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },

    showAgeAndLangs: function(ObjectData) {
        const {age} = ObjectData;
        const {languages} = ObjectData.skills;
        let STR = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            STR += `${lang.toUpperCase()} `;
        });
         
        return console.log(STR);
    }
};

function showExperience (dataObj) {
    const result = console.log(`${dataObj.skills.exp}`);
    return result
}

// showExperience(personalPlanPeter);


function showProgrammingLangs(objData) {
    const {js, php} = objData.skills.programmingLangs; // деструктирировал объект js и php
    const {programmingLangs} = objData.skills // деструктиризация програм ленгс

    // let a = Object.keys(objData.skills.programmingLangs).length;
    // console.log(`количество языков программирования`, a); // количество ключей 

    let result = '';


    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return console.log(result)
};
// showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs(personalPlanPeter);






//  Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'


const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const familyEmpty = [];

function showFamily(arr) {
    let str = '';

    for (let key of arr) {
        str += `${key} `;
    }

    if (Object.keys(arr).length === 0) {
        return console.log(`Семья пуста`);
    } else {
        return console.log(`Семья состоит из: ${str}`);
    }
    
    
    // for (let i = 0; i < arr.length; i++) {
    //     str += `${arr[i]} `
    // }
}
showFamily(family);





const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    for (let item of arr) {
        str += `${item.toLowerCase()}\n`;
    }
    // arr.forEach(function (item,i,arr){
    //     console.log(${item, i , arr});
    // })

    return str;
    
    
}
console.log(standardizeStrings(favoriteCities));


