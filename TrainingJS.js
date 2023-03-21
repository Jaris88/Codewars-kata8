/**
 * Complete function saleHotdogs/SaleHotDogs/sale_hotdogs,
 * function accepts 1 parameter: n, n is the number of hotdogs a customer will buy,
 * different numbers have different prices (refer to the following table),
 * return how much money will the customer spend to buy that number of hotdogs.
 */
// Дана функция
function saleHotdogs(n){
    // Условия, если покупают меньше 5 хотдогов, то кол-во хотдогов умножить на 100
    if (n < 5) return n*100
        // Иначе если покупают больше 5, но меньше 10 хотдогов, то кол-во умножить на 95
    else if (n>=5 & n<10) return n*95
        // Иначе если покупают больше 10 хотдогов, то кол-во умножить на 90
    else if (n >= 10) return n*90
}

// Решение через Тернарный оператор
function saleHotdogs(n){
    // Вернуть значение цены хотдогов в зависимости от кол-ва покупаемых,
    // где до ? - условие, а после ? стоимость 1 хотдога.
    return n*(n < 5 ? 100 : n>=5 && n<10 ? 95 : 90);
}