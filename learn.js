'use strict';

// Слайд 1

/*
//задние 1
for (let i = 1; i < 101; i++) {
//    console.log(i);
}

// задние 2

for (let i = 11; i < 34; i++) {
    console.log(i);
}

// задание 3
for (let i = 0; i < 101; i++) {
    console.log(i);
}

// задание 4
for (let i = 1; i < 101; i++) {
    console.log(i);
}
*/

// задние 5
// for (var i in [1, 2, 3, 4, 5]) {
//     console.log(m[i]);
// }

// задание 6
// let result = 0;
// let m = [1, 2, 3, 4, 5];
// for (var i in m) {
//     result += m[i];
// }
// console.log(result);

// задание 7
// var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for (var key in obj) {
//     console.log(`ключи: ${key} занчение: ${obj[key]}`)
// }

// задание 8
// let obj = {Коля: '200', Вася: '300', Петя: '400'};

// for (var key in obj) {
//     console.log(`${key} - заплатил ${obj[key]} долларов.`)
// }

// слайд 14

// задание 1
// let m = [2, 5, 9, 15, 0, 4];
// for (let i in m) {
//     if (m[i] <= 3 || m[i] >= 10) continue;
//     console.log(m[i]);
// }

// задание 2
// let m = [1, -2, 3];

// let sum = 0;
// for (let i in m) {
//     if (m[i] < 0) continue;
//     sum += m[i];
// }
// console.log(sum);

// задание 3
// let m = [1, 2, 5, 9, 4, 13, 10];
// for (let i in m) {
//     if (m[i] == 4) {
//         console.log('Есть!')
//         break
//     }
// }

// задание 4
// let m = [10, 20, 30, 50, 235, 3000];
// for (let i in m) {
//     if (String(m[i])[0] == '1' || String(m[i])[0] == '2' || String(m[i])[0] == '5') {
//         console.log(m[i]);
//     }

// }

// задание 5
// m = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '';
// for (let i in m) {
//     str+= '-'+ m[i];
// }
// str += '-';
// console.log(str);

// задание 6
// let massiv_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i in massiv_week) {
//     if (massiv_week[i] in ['Saturday', 'Sunday']) {
//         console.log(massiv_week[i].bold());
//     }

//     console.log(massiv_week[i]);

// }

// задание 7

// let massiv_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let day = 'Friday';
// for (let i in massiv_week) {
//     if (day == massiv_week[i]) {
//         console.log(massiv_week[i].toUpperCase());
//         continue;
//     }
//     console.log(massiv_week[i]);
// }

// задание 8

// let iter_count = 0;
// let n = 1000;

// while (n >= 50) {
//     n /= 2;

//     iter_count += 1;
// }

// console.log(iter_count);
