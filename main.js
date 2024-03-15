// 12 LESSON TASK 1

// Строгое равно проверяет на равенство две величины,
//  при этом тип каждой из величин перед сравнением не изменяется (не приводится).
//  Если значения имеют различающиеся типы, то они не могут быть равными.

// СТРОГОЕ СРАВНЕНИЕ

// TASK 1

// "42" == 42; true
// "0" == 0; true
// "0" == false; true
// "true" == true; false
// true == (1 == "1"); true

// "42" === 42; false
// "0" === 0; false
// "0" === false; false
// "true" === true; false
// true === (1 === "1"); false

// console.log();

// TASK 2 

// var a = "foo"

// var b = "bar"

// console.log(a+ +b)

// ВЫВЕЛО Foo + NaN означает что выполнена бессмысленная информация

// TASK 3 

// ("ананас" > "яблоко") false  сравнивается по символьно и по различию символов

// undefined == null true потому что оба значения как бы отсутсвуют
// undefined === null ; false

// TASK 4

// var name = "Hilton"

// var price = 40

// var wallet = 45

// var object = "Viru"

// if (wallet > price ) {
// 	console.log (" I have money to buy " + name);
// } else if (wallet < price) {
// 	console.log (" I have more money");
// } else if (Viru > Hilton) {
// 	console.log (" I stay in " + Object);
// } else if (price > wallet ) {
// 	console.log ("price is not bigger than my " + wallet);

	

// var e = 40;
// var r = 30;
// var result;
// e < r ? result = "e < r" :
// e > r ? result = "e > r" :
// e == r ? result = "e = r" :
// result = "all else dont work";

// console.log(result)

// TASK 5

// var name = "Hilton"
// var price = 40
// var wallet = 45
// var object = "Viru"
// var result;

// wallet > price ? result = "wallet > price" :
// wallet < price ? result = "wallet < price" :
// object > name ? result = "object > name" :
// price > wallet ? result = "price > wallet":

// result = "all else dont work";

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

// var name = "Hilton"

// var price = 40

// var wallet = 35

// var object = "Viru"

// if (45 > 40) {
// 	console.log (" I can buy " + name)
// } else {
// 	console.log ("I cannot buy" + name)
// }

// ТЕРНАРНЫЙ ОПЕРАТОР

// a = 10;
// b = 20;
// var result

// // a > b ? result = "a > b": result = "a < b ";     A < B ЭТО FALSE
// console.log(result);

// if (10 < 9 ) {
// 	console.log("Yes 10 < 9");
// } else if (10 == 9) {
// 	console.log(10 == 9);
// } else {
// 	console.log ("No, 10 is > 9")
// }


// var e = 40;
// var r = 30;
// var result;
// e < r ? result = "e < r" :
// e > r ? result = "e > r" :
// e == r ? result = "e = r" :
// result = "all else dont work";

// console.log(result)

// ПРОМ ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ ОТ ПОЛЬЗОВАТЕЛЯ

// var years = prompt("how old are you ?")

// console.log(years)

// if (years < 30) {
// 	alert (" You are still young");
// } else if ( years > 30) {
// 	alert (" Drink more water, walk more in the park, less nerves");
// } else {
// 	alert ("not correct option");
// }


//  ОПЕРАТОР && = И два аберсанта  если и слева и справа будет tru то условие первое выполнится если же в одном false то все условие не срабатывает

// ОПЕРАТОР || = ИЛИ сработает только в том случае если или слева или справа будет true хотя бы одно true

// if (years < 30 && years > 10 ) {
// 	alert (" Good time for studying");
// } else if ( years < 30 && years > 20) {
// 	alert ("the best time for work, you are not child anymore");
// } else if ( years > 30 || years < 40) { 
// 	alert ("how much kids do you have ?");
// } else {
// 	alert ("dont understand");
// }


// ВНИЗУ ВСЕ ПСЕВДОЛОЖНЫЕ ЗНАЧЕНИЯ при все эти 5 значений вепнут false а все остальеык true

// var test1;
// var test2 = null;
// var test3 = 0;
// var test4 = "";
// var test5 = NaN;


// var test1 = "Hello world";
// var test2 = 1;

// if(test1) {
// 	console.log(1);
// }

// if(test2) {
// 	console.log(2);
// }

// нам вернёт true все то что не пвсевдоложь

// ПСЕВДО ИСТИНА ИЛИ ПСЕВДО ЛОЖЬ ТОЕСТЬ КАК БЫ ЯВЛЯЕТСЯ ИСТИНОЙ ИЛИ ЛОЖЬЮ НО КАК БЫ И НЕТ но в условных операторах она отображается как тру или ложь

// SWITCH CASE




// if(color == "green") {
// 	console.log("this is green color");
// } else if (color == "red") {
// 	console.log("this color is red");
// } else if (color == "black") {
// 	console.log("this color is black");
// } else if (color == "yellow") {
// 	console.log("this color is yellow");
// } else if (color == "white") {
// 	console.log("this color is white");
// } else if (color == "blue") {
// 	console.log("this color is blue");
// } else {
// 	console.log("this is not a color");
// }
	

// СИНТАКСИС SWITHC CASE *(ПРОВЕРКА НА СТРОГОЕ СРАВНЕНИЕ)  ключевое слово скобки переменная для проверки (case - в том случае если)
// (break - Оператор break можно использовать для завершения обработки определенного оператора с меткой в операторе switch )
// break обрывает выполнениие совпашего кейса чтобы выйти из всей конструкции нужно поставить break

// var color = "blue";
// switch(color) {
// 	case "green" :
// 	console.log("this is color green");
// 	break;
// 	case "red" :
// 	console.log("this is color red");
// 	break;
// 	case "blue" :
// 	console.log("this is color blue");
// 	break;
// 	case "black" :
// 	console.log("this is color black");
// 	break;
// 	default : 
// 	console.log("this is not a color");
// }

// TASK 6

// var number = 15;
// prompt("number from 1-100?")


const number = +prompt('Введите число между 1 - 100', '');

switch(number) {
		case 15 :
		console.log("Вы угадали число");
		break;
		case 27 :
		console.log("Вы не угадали. Попробуйте ещё раз!");
		break;
		case 45 :
		console.log("Вы не угадали. Попробуйте ещё раз!");
		break;
		case 65 :
		console.log("Вы угадали число");
		break;
		case 86 :
		console.log("Вы не угадали. Попробуйте ещё раз!");
		break;
		default :
		console.log("Вы не угадали. Попробуйте ещё раз!");
}


// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

