
const data = [
    {
        type: 1,
        img: 'assets/images/iphone1.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone2.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone3.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone4.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone5.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone6.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone7.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 1,
        img: 'assets/images/iphone8.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Iphone 11',
        reduce: '20%'
    },
    {
        type: 2,
        img: 'assets/images/sac1.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'Sac Iphone',
        reduce: '20%'
    },
    {
        type: 3,
        img: 'assets/images/watch1.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'IWatch',
        reduce: '20%'
    },
    {
        type: 3,
        img: 'assets/images/watch2.jpg',
        priceNew: '11.000.000 d',
        priceOld: '14.000.000 d',
        name: 'IWatch',
        reduce: '20%'
    },
];

const list = document.querySelector(".list");
data.forEach((item) => {
    const itemIphone = document.createElement("div");
    itemIphone.classList.add('list-item')
    itemIphone.addEventListener("click", () =>{
        const value = JSON.stringify(item);
        localStorage.setItem('product', value);
        location.href = '../buy.html';
    });

    const itemImg = document.createElement("img");
    itemImg.src = item.img;
    itemImg.classList.add("item-img");
    itemIphone.appendChild(itemImg);

    const information = document.createElement("div");
    information.classList.add('information');
    itemIphone.appendChild(information);

    const nameProduct = document.createElement("p");
    nameProduct.classList.add('name-product')
    nameProduct.innerText = item.name
    information.appendChild(nameProduct);

    const price = document.createElement("div");
    price.classList.add('price')
    information.appendChild(price);

    const priceItem1 = document.createElement("p");
    priceItem1.classList.add('price-item');
    priceItem1.classList.add('new');
    priceItem1.innerText = item.priceNew;
    price.appendChild(priceItem1);

    const priceItem2 = document.createElement("p");
    priceItem2.classList.add('price-item');
    priceItem2.classList.add('old');
    priceItem2.innerText = item.priceOld;
    price.appendChild(priceItem2)

    const reduce = document.createElement("div");
    reduce.classList.add('reduce')
    itemIphone.appendChild(reduce);

    const indexReduce = document.createElement("p");
    indexReduce.classList.add('reduce-index');
    indexReduce.innerText = item.reduce;
    reduce.appendChild(indexReduce)

    list.appendChild(itemIphone)

})

const search = document.querySelector('#search');
const ul = document.querySelector('.search-ul');
search.addEventListener("mouseenter", (e) => {
    if (document.querySelector('.search-li')) {
        const searchItem = document.querySelector('.search-li')
        searchItem.remove();
    }

    const input = document.createElement("input");
    input.classList.add('search-input');
    input.type = 'text';

 
    const li = document.createElement('li');
    li.classList.add('search-li')
    li.appendChild(input);
    ul.appendChild(li)
  });

  ul.addEventListener("mouseleave", (e) => {
      const temp = document.querySelector('.search-input');
      temp.remove()
  })