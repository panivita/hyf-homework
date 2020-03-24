console.log('Script loaded');

function makerLists(className, key) {
    const lists = document.createElement('li');
    lists.classList.add(className);
    lists.innerHTML = key;
    return lists;
}

function renderProducts(products) {
    const ul = document.querySelector('section.products > ul');
    products.forEach((object) => {
        const li = document.createElement('li');
        ul.appendChild(li);
        const subUl = document.createElement('ul');
        li.appendChild(subUl);
        subUl.appendChild(makerLists('id', object.id));
        subUl.appendChild(makerLists('name', object.name));
        subUl.appendChild(makerLists('price', object.price));
        subUl.appendChild(makerLists('rating', object.rating));

        const subLi = document.createElement('li');
        subLi.classList.add('ships-to');
        const subSubUl = document.createElement('ul');
        subLi.appendChild(subSubUl);
        subUl.appendChild(subLi);

        object.shipsTo.forEach((country) => {
            const subSubLi = document.createElement('li');
            subSubLi.innerHTML = country;
            subSubUl.appendChild(subSubLi);
        })
    });
}
const products = getAvailableProducts();
renderProducts(products);
console.log(products);