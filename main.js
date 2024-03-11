// 12 LESSON TASK 1

// Строгое равно проверяет на равенство две величины,
//  при этом тип каждой из величин перед сравнением не изменяется (не приводится).
//  Если значения имеют различающиеся типы, то они не могут быть равными.

// СТРОГОЕ СРАВНЕНИЕ


"42" == 42; true
"0" == 0; true
"0" == false; true
"true" == true; false
true == (1 == "1"); true

"42" === 42; false
"0" === 0; false
"0" === false; false
"true" === true; false
true === (1 === "1"); false


console.log();


// TASK 2 

var a = "foo"

var b = "bar"

console.log(a+ +b)
// ВЫВЕЛО Foo + NaN означает что выполнена бессмысленная информация


// TASK 3 

// ("ананас" > "яблоко") false  сравнивается по символьно и по различию символов

// undefined == null true потому что оба значения как бы отсутсвуют
// undefined === null ; false

// TASK 4


// УСЛОВИЯ 

// if(10>9) {
// 	console.log("10 is bigger than 9");
// } else {
// 	console.log("10 is not bigger than 9")
// }

// var a = 50;

// if(a>40) {
// 	console.log("a is bigger than 40");
// } else {
// 	console.log("a is not bigger than 40")
// }


// ТЕРНАРНЫЙ ОПЕРАТОР

// a = 10;
// b = 20;
// var result

// // a > b ? result = "a > b": result = "a < b ";     A < B ЭТО FALSE
// console.log(result);



