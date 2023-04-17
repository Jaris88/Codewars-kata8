/*Task:
	Кодирование в функции whatNumberIsIt. функция принимает 1 параметр: n. это число.
	Чтобы судить о количестве n. Если n является одной из пяти указанных выше констант, верните одну из этих строк:
		"Input number is Number.MAX_VALUE"
		"Input number is Number.MIN_VALUE"
		"Input number is Number.NaN"
		"Input number is Number.NEGATIVE_INFINITY"
		"Input number is Number.POSITIVE_INFINITY"
Другие значения должны возвращаться "Input number is xxx". ххх означает этот номер. */

// Простыми "если...иначе..если" перебираем аргумент функции.
function whatNumberIsIt(n){
	if (n == Number.MAX_VALUE) {
		return "Input number is Number.MAX_VALUE";
	} else if (n == Number.MIN_VALUE) {
		return "Input number is Number.MIN_VALUE";
	} else if (n == Number.POSITIVE_INFINITY) {
		return "Input number is Number.POSITIVE_INFINITY";
	} else if (n >= 0){ // любое число большее или равное 0 или привести к типу входных данных
		return "Input number is " + n;
	} else if (n == Number.NEGATIVE_INFINITY) {
		return "Input number is Number.NEGATIVE_INFINITY";
	} else {
		return "Input number is Number.NaN";
	}
}