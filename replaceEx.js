
// Цель - замена всех гласных на !
// Дано функция, прописать решение
function replace(s){
    // Создаем константу, которая применяет метод replace к строке.
    // g - флаг "глобальный" чтобы применить метод ко всем входящим
    // i - чтобы избежать регистра (верхний, нижний)
    // "/..../" - начало и конеч регулярного выражения
    // [aeiou] - класс символов для замены, в данном случае гласные
    // "!" - замена удаленным класам символов, может быть пустым
    const noVowels = s.replace(/[aeiou]/gi, '!');
    // вызов переменной
    return noVowels;
}

// Короче
function replace(s){
    return s.replace(/[aeiou]/gi, '!');
}