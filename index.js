// Дана константа, перевод строки в число ("1234" --> 1234)
const stringToNumber = function(str){
    // т.к на выходе числовое значение задаем новую переменную, значение число
    let num  = Number(str);
    // функция вернуть значение переменной num
    return (num);
    // результат --> 1234
}

// короткая версия
var stringToNumber = function(str){
    return Number(str);
}