// console.log(Math.floor(2.99));
// console.log(Math.ceil(2.000000000001));
// console.log(Math.round(2.499999));
// console.log(Math.abs(10));
// console.log(Math.pow(9,2));
// console.log(Math.sqrt(4));
// console.log(Math.max(-50,-40));
// console.log(Math.min(9/12,3/4));
// console.log(Math.floor(Math.random()*500)+501);
// console.log(Math.floor(Math.random()*100)+1);

// 0 - 1
// let randomNumber = Math.floor(Math.random()*100)+ 1;
// console.log(randomNumber);

// let password = prompt('Enter password');
// console.log(password.length >= 4);


// let a = 5;
// let b = '5';
// console.log(a == b);
// console.log(a === b); 

// let a = 1;
// let b = '1';
// console.log(a === b);
// console.log(a == b);

//
// let a = NaN,
//     b = NaN;
// // console.log(a != b);
// // console.log(a !== b);
// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = null;
// // //
// console.log(a == b);
// console.log(a === b);
//
// let a = null,
// b = null;
// console.log(a == b);
// console.log(a === b);

// let a = null,
// b = undefined;

// console.log(a == b);
// console.log(a === b);

// let a = 0,
// b = undefined;
// console.log(a == b);
// console.log(a === b);
//
// let a = 'a',
//     b = null;
// console.log(a == b);
// console.log(a === b);

// let a = '0',
//     b = 0;
// console.log(a == b);
// console.log(a === b);

// let a = 'H';
// let b = 'h';

// console.log(a == b);
// console.log(a === b);

// let c = "Hello";
// let d = "Hello";
// console.log(c == d);
// console.log(c === d);

// let a = 5;
// let b = 10;

// console.log(a >= b);

// || or 
// && and
// ! not

// console.log('Отримав відпустку' && "Квитки" && 'Train');
// console.log('Отримав відпустку' || "Квитки" || 'Train');

// false
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(false));

// true
// console.log(Boolean('add'));
// console.log(Boolean(Infinity));
// console.log(Boolean(' '));
// console.log(Boolean(-5));

// console.log(!(5 === 5));

// console.log(0 || '' || '0');
// console.log(0 || null || '0');
// console.log(0 || undefined || null);
// console.log(4 + 5 === 8 || 5 * 4 === '20' || 'q' + 'w' === 'w');
// console.log(0 || '' || 0);
// console.log(0 || null || 'undefined'); 
// console.log(NaN || null || 5);
// console.log(28 || null || '');
// console.log(Infinity || 55 || NaN);
// console.log(undefined || 'true' || NaN);

// console.log('a' && 1 && 0);
// console.log('a' && 1 && 2);
// console.log('a' && 0 && 2);
// console.log('0' && NaN && 2);
// console.log('' && NaN && 2);
// console.log(' ' && NaN && 2);
// console.log({age:25} && 'null' && 2);
// console.log({age:25} && null && 2);
// console.log({age:25} && undefined && 2);
// console.log({age:25} && 8 && -Infinity);
// console.log(false && 'false' && -Infinity);
// console.log('true' && -0 && null);
// console.log(a = 5 + 6);

// let password = prompt('Enter password');
// if(password.length >= 6) {
//     alert('Congratulation');
// } else {
//     alert('Enter new password');
// }
// let value = prompt('Enter number');
// if(value > 0  && Number.isInteger(Number(value))) {
//     alert ('You win');
// } else {
//     alert('Try again');
// }

// let value = prompt('Enter month`s number');
// let month = Number(value);
// if(month === 1 || month === 2 || month === 12) {
//     alert('Winter');
// } else if (month === 3 || month === 4 || month === 5) {
//     alert('Spring');
// } else if (month === 6 || month === 7 || month === 8) {
//     alert ('Summer');
// } else if (month === 9 || month === 10 || month === 11) {
//     alert ('Autumn');
// } else {
//     alert ('Enter number from 1 to 12');
// }

// console.log(12);

// let egyptHotel = 50;
// let bulgariaHotel = 20;
// let tryskavetsHotel = 150;

// let amount = prompt('Enter amount');

// if(amount >= 1000) {
//     alert('Welcom to Egypt');
//     let rooms = prompt('How rooms you need?');
//     if(rooms <= egyptHotel) {
//         alert('Reserved');
//         egyptHotel = egyptHotel - rooms;
//     } else {
//         alert ('Sorry');
//     }

// } else if (amount >= 500 && amount < 1000) {
//     alert('Welcom to Bulgaria');
//     let rooms = prompt('How rooms you need?');
//     if (rooms <= bulgariaHotel ) {
//         alert('Reserved');
//         bulgariaHotel = bulgariaHotel - rooms;
//     } else {
//         alert ('Sorry');
//     }
// } else if (amount >=100 && amount < 500) {
//     alert('Welcom to Tryskavets');
//     let rooms = prompt('How rooms you need?');
//     if (rooms <= tryskavetsHotel) {
//         alert('Reserved');
//         tryskavetsHotel = tryskavetsHotel - rooms;
//     } else {
//         alert ('Sorry');
//     }
// } else {
//     alert('Go to work');
// }

// let value = prompt('Enter month`s number');
// let month = Number(value);
// if(month === 1 || month === 2 || month === 12) {
//     alert('Winter');
// } else if (month === 3 || month === 4 || month === 5) {
//     alert('Spring');
// } else if (month === 6 || month === 7 || month === 8) {
//     alert ('Summer');
// } else if (month === 9 || month === 10 || month === 11) {
//     alert ('Autumn');
// } else {
//     alert ('Enter number from 1 to 12');
// }

// switch (month) {
//     case 1:
//         alert('Winter');
//         break;
//     case 2:
//         alert('Winter');
//         break;
//     case 12:
//         alert('Winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Autumn');
//         break;
//     default:
//         alert('Enter number from 1 to 12')
//         break;
// }
// switch (true) {
//     case 1:
//         alert('Winter');
//         break;
//     case 2:
//         alert('Winter');
//         break;
//     case 12:
//         alert('Winter');
//         break;
//     case (month >= 3 && month <=5):
//         alert('Spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Autumn');
//         break;
//     default:
//         alert('Enter number from 1 to 12')
//         break;
// }

// let a =5;
// let b = 10;
// let result = a > b ? 'Hello' : 'Bye';
// let result = a > b ? 'Hello' : a < b ? 'Good' : a === b ? 'Equal' : 'Bye';
// console.log(result);

// if(5 > 6) {
//     result = 'Hello';
// } else {
//     result = 'Bye';
// }






// let time = prompt('Enter time');
// console.log(Number(time));
// console.log(time);
// if (Number(time)) {
//     if (time <= 21) {
//         alert('Включи футбол 1');
//     } else {
//         alert('Можеш йти спати');
//     }
// } else {
//     alert('Введи число');
// }

// let month = prompt('Enter month').toLowerCase();

// if (month === 'грудень' || month === 'січень' || month === 'лютий') {
//     alert('Winter');
// } else if (month === 'березень' || month === 'квітень' || month === 'травень') {
//     alert('Spring');
// } else if (month === 'червень' || month === 'липень' || month === 'серпень') {
//     alert('Summer')
// } else if (month === 'вересень' || month === 'жовтень' || month === 'листопад'){
//     alert('Autum');
// } else {
//     alert('помилка вводу');
// }

// switch (month) {
//     case 'грудень':
//         alert('Winter');
//         break;
//     case 'січень':
//         alert('Winter');
//         break;
//     case 'лютий':
//         alert('Winter');
//         break;
//     case 'березень':
//     case 'квітень':
//     case 'травень':
//         alert('Spring');
//         break;
//         // case (month > 5):
//         //     alert('Test');
//     default:
//         alert('помилка вводу');
//         break;
// }
// let age = prompt('Enter age');

// let result = age > 15 ? 'Студент' : 'Учень';

// let result = age > 15 ? 'Студент' : age < 15 && age > 8 ? 'Учень' : 'Дитина';


// if (age > 15) {
//     result = 'Студент';
// } else {
//     result = 'Учень';
// }




/*
1) Користувач вводить суму коштів + 
1.1) Сума має бути додатня, ціла, це має бути число. (Якщо так переходимо до пункту 2, якщо ні говоримо щоб ввів правильне число). +
2) Якщо він ввів 20000 пропонуємо поїхати в Турцію +
2.1) Якщо сказав Так тоді пишемо що місце заброньоване +
2.2) Якщо ні тоді пропонуємо наступний варіант - Єгипет +
2.2.1) Якщо каже так - бронюємо Єгипет +
2.2.2) Якщо ні пропонуємо Болгарію + 
2.2.2.1) Якщо так - бронюємо Болгарію +
2.2.2.2) Якщо ні - Прийди завтра +
*/
// let yourMoney = +prompt('Enter amount money'); // 5000
// // console.log(yourMoney);
// // console.log(!isNaN(yourMoney));


// if (yourMoney > 0 && !isNaN(yourMoney) && Number.isInteger(yourMoney)) { // yourMoney % 1 === 0
//     if (yourMoney >= 20000) {
//         let answer = confirm('Do you want go to Tyrkey ?');
//         if (answer) {
//             alert('welcomen to Tyrkey');
//         } else {
//             let answer = confirm('Do you want go to Egypt ?');
//             if (answer) {
//                 alert('welcomen to Egypt');
//             } else {
//                 if (confirm('Do you want go to Bulgaria ?')) {
//                     alert('welcomen to Bulgaria');
//                 } else {
//                     alert('Come back tomorrow');
//                 }
//             }
//         }
//     } else {
//         alert('You need 20000 UAH');
//     }
//     console.log('ok');
// } else {
//     alert('Wrong number');
// }

// if (yourMoney >= 20000) {
//     alert('Welcomen Turkey');
// } else if (yourMoney >= 15000 && yourMoney < 20000) {
//     alert('Welcomen to Egypt');
// } else if ( yourMoney > 10000 && yourMoney < 15000 ) {
//     alert('Welcomen to Bulgaria');
// } else if ( yourMoney === 10000) {
//     alert ('Welcome to Tryskavets')
// } else {
//     alert('Go to work');
// }

// Написати код який показує пору року в залежності від номера місяця який ми ввели.

// 1) Написати код який попроситьс в користувача ввести номер місяця
// 2) Написати перевірку яка виведе нам на екран "Зима" якщо користувач ввів числа або 12 або 1 або 2.
// 3) весна 3 або 4 або 5.
// 4) літо 6 або 7 або 8.
// 5) осінь 9 або 10 або 11.
// 6) Перевірка на помилки.

// let month = +prompt('Введи номер місяця');
// console.log(month);
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима')
// }
// else if (month === 3 || month === 4 || month === 5) {
//     console.log('Весна')
// }
// else if (month === 6 || month === 7 || month === 8) {
//     console.log('Літо')
// }
// else if (month === 9 || month === 10 || month === 11) {
//     console.log('Осінь')
// }
// else {
//     console.log('Error')
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// }


// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// }

// let condition = true;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let condition = false;
//
// if (condition) {
//     console.log('Evrika');
// } else {
//     console.log('Losser');
// }

// let car = prompt('Enter car brend');
//
// if (car === 'Audi') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }
// f
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || 'BMW' || 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let car = prompt('Enter car brend');
//
// if (car === 'Audi' || car === 'BMW' || car === 'Opel') {
//     console.log('Хороша машина');
// } else if (car === "Zaporojets" || car === "Traktor") {
//     console.log('Для села підійде');
// } else {
//     console.log('Пішохід');
// }

//
// let myTime = prompt("what hour is it?");
//
// if(myTime >= 8 && myTime < 12) {
//     console.log("Wake up its morning");
// } else if (myTime >= 12 && myTime < 13) {
//     console.log("go to Lunch");
// } else if (myTime >= 13 && myTime <= 16) {
//     console.log("Go to work");
// } else if (myTime >16 && myTime < 20) {
//     console.log("Dinner Time");
// } else if (myTime >= 22) {
//     console.log("Time to go to sleep");
// } else {
//     console.log("You should be sleeping");
// }
//
// let luckyNumber = 1;
// if (luckyNumber === 1) {
//     console.log('more');
// } else if (luckyNumber === 3) {
//     console.log('little more');
// } else if (luckyNumber === 7) {
//     console.log('You win');
// } else {
//     console.log('try again');
// }
// switch (luckyNumber) {
//     case 1:
//     case 2:
//         console.log('more');
//         break;
//     case 3:
//         console.log('little more');
//         break;
//     case 7:
//         console.log('You win');
//         break;
//     default:
//         console.log('try again');
//         break;
// }


// switch (luckyNumber) {
//     case 1:
//         console.log('test');
//         break;
//     case 8:
//         console.log("this is 8");
//         break;
//     case 7:
//         console.log("You win");
//         break;
//     default:
//         console.log('error');
//         break;
// }
//
// if (luckyNumber === 1) {
//     console.log('it is one');
// } else if (luckyNumber === 8) {
//     console.log("this is 8");
// } else if (luckyNumber === 7) {
//     console.log("You win");
// } else {
//     console.log('error');
// }
// let a = 5;
// let b = 5;
//
// switch (a) {
//     case b:
//         console.log('true');
//         break;
//     default:
//         console.log('false');
// }
// switch (luckyNumber) {
//     case 1 :
//         console.log('it is 1');
//         break;
//     case 8:
//         console.log('It is 8');
//         break;
//     default:
//         console.log('default');
//         break;
// }
// забрати break


// if (a === b) {
//     console.log('true');
// } else if (a > b ) {
//     console.log('Up');
// } else  {
//     console.log('fale');
// }

//
// let result = a === b ? 'true' : a > b ? 'Up' : 'false';
// console.log(result);

// let str = null;
// if (6 > 5) {
//     str = 'Evrika'
// } else {
//     str = 'Loser'
// }
// console.log(str);

// let str = 6 > 5 ? 'Evrica' : 'Loser';
// console.log(str);

// let test = 5 > 6 ? 'Evrika' : 'Too bad';
// console.log(test);

// let color = prompt('Enter color');
// //
// let result = color === 'white' || color === 'red' || color === 'green' ? "Day" : "Night";
// console.log(result);

// let num = 5;
//
// let result = num === '5' ? 'Evrika' : num === '4' ? 'Loser' : 'Fail';



// 1 && '5' & 2
// 'a'&& null & '0'
// 1 && undefined & 5

// ask a question
// random number for random response
// use switch to create some random responses
// output the response back with the question


// let question = prompt("Запитай мене");
// let randomNumber = Math.floor(Math.random()*6);
// switch (randomNumber){
//     case 0:
//         answer = "Все буде ок";
//         break;
//     case 1:
//         answer = "Може бути, може бути, і ні";
//         break;
//     case 2:
//         answer = "Напевно ні";
//         break;
//     case 3:
//         answer = "Дуже ймовірно";
//         break;
//     default:
//         answer = "Я не знаю про це нічого";
// }
//
// document.write(`Поставлене питання "${question}" <br/> шар думає що "${answer}"`);
//


// player choice
// computer choice
// Tie check
// player win combinations
// computer win combinations
// document.write result


//
// let player = prompt("Камінь, Ножиці, Папір");
// let ps = player.toUpperCase();
//
// let computer = Math.random();
// if (computer < 0.34) {
//     computer = "Камінь";
// }
// else if (computer < 0.67) {
//     computer = "Папір";
// }
// else {
//     computer = "Ножиці";
// }
// let cs = computer.toUpperCase();
// console.log(computer);
//
// if (cs === ps) {
//     console.log("Нічия");
// }
// else {
//     if (ps === "KАМІНЬ" && cs === "HОЖИЦІ") {
//         console.log('Ти виграв');
//     }
//     else if (ps === "ПАПІР" && cs === "KАМІНЬ") {
//         console.log('Ти виграв');
//     }
//     else if (ps === 'НОЖИЦІ' && cs === "ПАПІР") {
//         console.log('Ти виграв');
//     } else {
//         console.log('Ти програв');
//     }
// }

/*
1) Попросити користувача ввести пору року +
2) Якщо ввели Зима - виводимо на екран слово "Холодно"
3) Якщо ввели Літо - виводимо на екран слово "Жарко"
4) Якщо ввели Осінь - виводимо на екран слово "Дощі"
5) Якщо ввели Весна - виводимо на екран слово "Квіточки"
*/
// let season = prompt('Enter season').toLowerCase();
// if (season === 'зима') {
//     alert('Холодно');
// } else if (season === 'літо') {
//     alert('Жарко');
// } else if (season === 'осінь') {
//     alert('Дощі');
// } else if (season === 'весна'){
//     alert('Квіточки');
// } else {
//     alert('Wrong season');
// }

// switch (season) {
//     case 'зима':
//         alert('Холодно');
//         break;
//     case 'літо':
//         alert('Жарко');
//         break;
//     case 'осінь':
//         alert('Дощі');
//         break;
//     case 'весна':
//         alert('Квіточки');
//         break;
//     default:
//         alert('Wrong season');
// }


// let login = prompt('Enter login');

// if (login.length >= 4) {
//     alert('Congratulation you in');
// } else {
//     alert('Enter larger login')
// }

// login.length >= 4 ? alert('Congratulation you in') : alert('Enter larger login');

// season === 'зима' ? alert('Холодно') : season === 'літо' ? alert('Жарко') :season === 'весна' ? alert('Квіточки') : season === 'осінь' ? alert('Дощі') : alert('Wrong season');

// написати гру Камінь-Ножиці-Папір
// 1.1 Комп'ютер загадує один з трьох варіантів випадково.
// 1.2 Юзер вводить свій варіант.
// 1.3 Алертом показуємо переможця.

// етап №1 
// Написати код щоб комп'ютер виводив в консоль випадкову фразу "Камінь-Ножиці-Папір" (random)
// етап №2
// Запитати в користувача його варіант "Камінь-Ножиці-Папір" (prompt)
// етап №3
// Зробити первірку варіанта від комп'ютера і юзера і вивести алертом переможця
// (Якщо варіанти співпали вивести фразу "Нічия") (if and switch)
// етап №4 
// Якщо користувач вводить не коректне слово вивдиться алерт "Я так не граю";


// 1) Питаємся в користувача яка в нього є валюта
// 2) Питаємся в яку він хоче перевести
// 3) Питаємся яку суму хоче поміняти 
// 4) Вивести на екран суму яка вийшла. 
// usd eur uah
// const USD_UAH = 28.3;
// const UAH_USD = 1 / USD_UAH;
// const EUR_UAH = 30;
// const UAH_EUR = 1 / EUR_UAH;