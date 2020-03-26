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
        const shipsToUl = document.createElement('ul');
        subLi.appendChild(shipsToUl);
        subUl.appendChild(subLi);

        object.shipsTo.forEach((country) => {
            const countryLi = document.createElement('li');
            countryLi.innerHTML = country;
            shipsToUl.appendChild(countryLi);
        })
    });
}
const products = getAvailableProducts();
renderProducts(products);
console.log(products);