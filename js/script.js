for (i = 20; i > 10; i--) {
    console.log(i);
    if (i === 14) {
        break;
    }
};

let i = 4;
do {
    i++;
    console.log(i);
}
while (i<10);
    
    
for (j=2; j<=10;j++) {
     if(j % 2 !== 0) {
        continue;
     } 
     console.log(j);
};



const obj = {
    name: ' john',
    age: 25
};
console.log(obj);


// MACUB

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

console.log(arrayOfNumbers);
return arrayOfNumbers;


let arr = [5,6,7,8,9,10];
console.log(arr);






let i = 2;
while (i <= 15) {
    i++;
    if (i % 2 === 0) {
    continue;
    } else {
    console.log(i);
    }
}




"use strict";
first: for (let i = 0; i < 3; i++) {
    console.log(`first lvl ${i}`);
    
    for(let j = 0; j < 3; j++) {
        console.log(`second lvl ${j}`);
        
        for(let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`third lvl ${k}`);
        }
    }
};


console.log();

/*Заполните новый массив (result) числами из старого (arr). 

Количество элементов в массиве можно получить как arr.length,

 а к элементам обращаемся все так же: arr[0], arr[1] и тд.

Должен получиться точно такой же массив
*/

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];

const result = [];

for (i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);




/* Измените данный массив так, чтобы все числа были увеличены в 2 раза, 
const data = [5, 10, 'Shopping', 20, 'Homework'];

 Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

а если попадается строка строка - то к ней было добавлено " - done".

Для определения типа данных используйте typeof();

Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

*/


"use strict";
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'number') {
        data[i] = data[i] * 2 ;
    } else if (typeof data[i] === 'string') {
        data[i] = data[i] + ' - done';  
    }
}

console.log(data);


/*  Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

    const data = [5, 10, 'Shopping', 20, 'Homework'];

    Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

*/

    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (i = 0; i < data.length; i++) {
    result[0] = data[4];
    result[1] = data[3];
    result[2] = data[2];
    result[3] = data[1];
    result[4] = data[0];
};
console.log(result);



"use strict";
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
                                //5
    for (let i = 1; i <= data.length; i++) {
    
                                //    iteration 1
        // result[0] = data [5-1] 
        result[i - 1] = data[data.length - i]
    }
console.log(result);

 
"use strict";
const data = [5, 10, 'Shopping', 20, 'Homework'];
console.log(data.length);
const result = [];
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }
console.log(result);

let i = 1;
for (; i < 5; i++) {
    
}

console.log(i)



// 

for (let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++) {
        console.log(j);
    }
};

let result = '';
for (let i = 1; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
        
    }
    result += '\n';
}
console.log(result);



// 0 - повторение первого цикла (Родительского) 1 раз
// 0 - повторение дочерного цикла  (Цикл в цикле < j > ) 1 раз
// 1 - повторение дочерного цикла  (Цикл в цикле < j > ) 2 раз 
// 2 - повторение дочерного цикла  (Цикл в цикле < j > ) 3 раз 
// 1 - повторение первого цикла (Родительского) 2 раз
// 0 - повторение дочерного цикла  (Цикл в цикле < j > ) 4 раз
// 1 - повторение дочерного цикла  (Цикл в цикле < j > ) 5 раз
// 2 - повторение дочерного цикла  (Цикл в цикле < j > ) 6 раз
// 2 - повторение первого цикла (Родительского) 3 раз 
// 0 - повторение дочерного цикла  (Цикл в цикле < j > ) 7 раз
// 1 - повторение дочерного цикла  (Цикл в цикле < j > ) 8 раз
// 2 - повторение дочерного цикла  (Цикл в цикле < j > ) 9 раз



