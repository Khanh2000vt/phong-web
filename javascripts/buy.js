const product = JSON.parse(localStorage.getItem('product'))
console.log(product);

const img = document.querySelector('.img-responsive')
img.src = product.img;

const title = document.querySelector('.column-title');
title.innerHTML = `Buy ${product.name}`;

const price = document.querySelector('.column-price');
price.innerHTML = `Giá: ${product.priceNew}`;
// {
//     type: 3,
//     img: '../assets/images/watch 1.jpg',
//     priceNew: '11.000.000 d',
//     priceOld: '14.000.000 d',
//     name: 'IWatch',
//     reduce: '20%'
// },