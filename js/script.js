
function calculateVolumeAndAre(num) {
    let str = `Объем куба: ${num * num * num},Площадь всей поверхности: ${(num * num)* 6}`;
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num))  {
        return "При вычислении произошла ошибка";
    } else {
        return str
    }
}
console.log(cub(13))


// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function searchPlace(argument) {
    if (typeof(argument) !== 'number' || argument < 0 || argument !== parseInt(argument) ) {
        console.log('Ошибка. Проверьте правильность введенного номера места');
    } else if (argument === 0 || argument > 36) {
        console.log('Таких мест в вагоне не существует');
    }

    else {
        console.log(Math.ceil(argument / 4));
    }

    // return Math.ceil(argument / 4);
    
}
searchPlace(3);