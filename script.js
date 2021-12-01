'use strict';

// console.log('Запрос данных');
// setTimeout(() => {
//     console.log('Подготовка данных...');
//     const product = {
//         name: 'tv',
//         price: 2000
//     };
//     setTimeout(()=> {
//         product.status = 'order';
//         console.log(product)
//     }, 2000);
// }, 2000);         // callback hell хотим избавиться от этого (хотя чет пока все стало сложнее)

//  

const req = new Promise(function(resolve, reject) { // создаем константу req с промисом, всегда 2 аргумента resolve and reject
    console.log('Запрос данных');
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'tv',
            price: 2000
        };
        resolve(product); // эта функция находится в req.then ниже, она запускается при успешном выполнении функции выше
    }, 2000); 
});

req.then((product)=>{
    return req2 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product); // при успешном выполнении второй функции мы прописываем эту функцию для этой функции, т.к. мы использовали сразу return, то мы можем укоротить код, как это сделано ниже
        }, 2000);
    });
}).then(data => { // вот так
    data.modify = true;
    return data;
}).then((data) => { // и еще раз
    console.log(data); // выводим объект products
}).catch(()=>{
    console.error('Произошла ошибка'); // вылезет при ошибке, пока не знаю как проверить
}).finally(() =>{
    console.log('Finally'); // выполнится в конце промиса, вне зависимости от результата предыдущих шагов
});


function test(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
}


test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));


// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('ALL'); 
// }); // метод для того, чтобы выполнить какие-либо действия после выполнения всех промисов

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('ALL1'); 
// }); // начинает выполнение когда выполнен первый промис