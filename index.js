//3. В текстовий рядок вводяться серія чисел, розділених комою.
// При натисканні на кнопку має виконатись функція.
// Функція перетворює в масив введене в текстовий рядок значення та перевіряє чи є в масиві дублікати.
// Якщо є то видаляє їх та виводить на екран за допомогою alert.

let text1 = document.getElementById('text1');
let button1 = document.getElementById('btn1');
let array1 = [];

button1.onclick = (ev) => {
    func1();
    ev.preventDefault();
}

function func1 (){
    let dublicates = [];
    array1 = text1.value.split(',');
    array1.sort();
    for (let i = 0; i < array1.length; i++) {
        if (array1[i++] === array1[i]) {
            dublicates.push(array1[i]);
        }
    }
    console.log(dublicates);
    const sortArr = array1.filter((it, index) => index === array1.indexOf(it = it.trim()));
   // console.log(dublicates);
    alert('Дублікати '+dublicates);
    alert('Масив без дублікатів '+sortArr);
}

//23.В текстовий рядок вводиться число (N). При натиснені кнопки). При натиснені кнопки
// викликається функція. Функція генерує N випадкових
// неповторювальних чисел та заносить у масив, який відтворюється у
// абзаці.

let text2 = document.getElementById('text2');
let button2 = document.getElementById('btn2');
let result2 = document.getElementById('result2');

button2.onclick = (ev) => {
    func2()
    ev.preventDefault();
}

function func2(){
    let array2 = [];

    for (let i = 0; i < text2.value; i++) {
        let num = generateNum(array2);
        array2.push(num)
    }
    result2.appendChild(document.createTextNode(array2));
    result2.appendChild(document.createElement('br'));
}
generateNum = (array) => {
    let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    while (array.includes(num)) {
        num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
    return num;
}

//27.В текстовий рядок вводяться серія значень, розділених комою (значення
// можуть бути числові та рядкові). При натисканні на кнопку має
// виконатись функція. Функція формує масив з введених даних та
// викликає getLast(array, n) та результату виводить у абзац. Написати іншу
// getLast, яка повертає останніх n символів масиву.

let text3 = document.getElementById('text3');
let button3 = document.getElementById('btn3');
let result3 = document.getElementById('result3');
let number3 = document.getElementById('number3');
let array3 = [];


button3.onclick = (ev) => {
    func3();
    ev.preventDefault();
}

function func3 (){
    array3 = text3.value.split(',');
    array3 = getLast(array3, number3.value);

    if (array3.length) {
        result3.appendChild(document.createTextNode(array3));
        result3.appendChild(document.createElement('br'));
    }
}
getLast = (array, n) => {
    if (n < 0 || n > array.length) {
        alert("n must be > 0 and  array length!!");
        return;
    }
    array = array.slice(Math.max(array.length - n, 0))
    return array;
}

//18.В текстовий рядок вводяться серія значень (чисел), розділених комою
// (значення можуть бути числові та рядкові). При натисканні на кнопку
// має виконатись функція. Функція перетворює в масив введене в
// текстовий рядок значення та створює новий масив, який сформовано з
// введених елементів які більші за 10. Вивести новий масив в абзаці.
// Якщо новий масив містить 0 елементів – вивести напис «Таких
// елементів немає».

let text4 = document.getElementById('text4');
let button4 = document.getElementById('btn4');
let result4 = document.getElementById('result4');
let array4 = [];

button4.onclick = (ev) => {
    func4();
    ev.preventDefault();
}

function func4(){
    array4 = text4.value.split(',');
    array4 = array4.filter((v) => (v == +v && +v > 10));
    if (array4.length) {
        result4.appendChild(document.createTextNode(array4));
    } else {
        result4.appendChild(document.createTextNode('Таких елементів немає!'));
    }
    result4.appendChild(document.createElement('br'));
}

////В текстовий рядок вводиться послідовність чисел. Після натиснення
// // кнопки, викликати функцію. Функція повинна сформувати масив
// // значень та заповнити наперед сформовану таблицю. Значення таблиці
// // мають бути факторіалами цих чисел. Якщо кількість значень у рядку
// // більше за кількість місць у таблиці вивести попередження через alert.
// // Якщо у рядку трапляються не числові значення, ігнорувати.

let text5 = document.getElementById('text5');
let button5 = document.getElementById('btn5');
let array5 = [];

cells = document.getElementsByClassName('cell');

button5.onclick = (ev) => {
    func5();
    ev.preventDefault();
}

function func5 (){
    array5 = text5.value.split(',');
    array5 = array5.filter((v) => v == +v);
    if (array5.length > cells.length) {
        alert("Забагато значень!!!Комірок-3")
    } else {
        for (let i = 0; i < array5.length; i++) {
            cells[i].children[0].textContent= array5[i];
            cells[i].children[1].textContent=factorial(array5[i]);
        }
    }
}
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}