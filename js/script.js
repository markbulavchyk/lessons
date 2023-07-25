"use strict";

// Числа

let number = 4.6;
console.log(4/0);               // infinity - числовой тип данных который определяет бесконечность

console.log('string' * 9);      // NaN - не число , not a number

const persone = "5";            // это будет тип даных строка, не стоит путать с типом данных число

const bool = true;              // bool - логический тип данных , true / false / (булиновый)

let und;
console.log(und);               //  - undefined тип данных  (когда мы ссылаемся на что то , но он пустой)

console.log(something);         // - мы не можем сослаться на не существующий объект (тип данных null)


const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj); // в консоле получают нейм со значением джон, возраст = 25 и мериед - фолсе


const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj.name); // обращение к переменной name 


console.log(obj["name"]); // такая структура используется для хранения данных которые идут строго по порядку

let arr = ['plum.png', 'orange.jpg',6 ,{}, 'apple.bmp']; // массив - комплексный тип данных 
                                                        //(Массив - является частным случаем обьъекта) а не отдельным типом данных 
console.log(arr[0]);


// Счет начинается с 0 ,а не с 1




