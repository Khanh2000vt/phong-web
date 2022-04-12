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