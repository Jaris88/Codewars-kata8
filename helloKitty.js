/* Task
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.
You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll",
you should push it to a bag(bag is an array,
I've defined in the function); if it's other strings, we should use continue skip it.
When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full,
you should traverse dolls until the last element.
Return the bag after for loop finished.
You should use for, break and continue in your code. otherwise, your solution may not pass this kata. */

// Дана функция с массивом
function grabDoll(dolls){
    var bag=[];
    // Через цикл for перебираем значения массива
    for (var i = 0; i < dolls.length; i++){
        // Если массив содержит строку "Hello Kitty" или "Barbie doll"
        if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
            // То добавить в новый массив bag
            bag.push(dolls[i]);
            // Иначе, метод continue - позволяет пропускать цикл и переходить к следующему.
        } else {
            continue;
            // Если Длина массива bag больше или равно 3, то метод break
            // break - останавливает(прерывает) цикл
        } if (bag.length >= 3) {
            break;
        }
    }
    return bag;
}