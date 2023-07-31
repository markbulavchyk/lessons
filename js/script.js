"use strict";
// 	Какое будет выведено значение: let x = 5; alert( x++ ); ?
// 5 так как x++ декремент постфиксной формы 

// 	Чему равно такое выражение: [ ] + false - null + true ?
console.log([] + false - null + true);
// не число  
// пустой массив приравнивается к пустой строке [] + что то мы получаем строка + чтото
console.log(typeof ([] + false));

// 	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1, x = y = 2;
// alert(x); // 2 

// 	Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2);
// 12 - '12' type sring

// 	Что выведет этот код: alert( "1"[0] )
console.log('1'[0]); 
// 0index строки 1 будет 1

// 	Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined );
// оператор && запинается на лжи , первая ложь слева на право - null

console.log(!!1);
// 	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
let a;
let b;
console.log(!!(a && b) == (a && b));
//  два знака !! - превращает значение в булиновое true  


//  Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(null || 2 && 3 || 4);
// оператор || запинается на правде 
// 3


// 	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// нет


// 	Что выведет этот код: alert( +"Infinity" ); ?
console.log(typeof (+'Infinity'));
console.log(typeof Infinity);
// Infiniti - тип данных number, так как унарный плюс

// 	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
// нет

// 	Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе);
    
// 2 , оператор || запинается на правде 