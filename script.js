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
// }, 2000);         // callback hell

const req = new Promise(function(resolve, reset) {
    console.log('Запрос данных');
    setTimeout(() => {
        console.log('Подготовка данных...');
        const product = {
            name: 'tv',
            price: 2000
        };
        resolve(product);
    }, 2000); 
});

req.then((product)=>{
    return req2 = new Promise((resolve, reject) => {
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(() => {
    console.log(data);
});
