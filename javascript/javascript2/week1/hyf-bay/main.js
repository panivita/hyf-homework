console.log('Script loaded');

function makeListItem(className, key) {
    const listItem = document.createElement('li');
    listItem.classList.add(className);
    listItem.innerHTML = key;
    return listItem;
}

function renderProducts(products) {
    const ul = document.querySelector('section.products > ul');
    products.forEach((object) => {
        const li = document.createElement('li');
        ul.appendChild(li);
        const subUl = document.createElement('ul');
        li.appendChild(subUl);
        subUl.appendChild(makeListItem('id', object.id));
        subUl.appendChild(makeListItem('name', object.name));
        subUl.appendChild(makeListItem('price', object.price));
        subUl.appendChild(makeListItem('rating', object.rating));

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