console.log('Script loaded');

console.log(getAvailableProducts());

//const testProductNames = [];

function renderProducts(products) {
    const ulTag = document.querySelector('section.products > ul');
    testProductNames.forEach((productName) => {
        const liTag = document.createElement('li');
        liTag.textContent = productName;
        ulTag.appendChild(liTag);
    });
}
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts(testProductNames);

function makeListItem(className, key) {
    const listItem = document.createElement('li');
    listItem.classList.add(className);
    listItem.innerHTML = key;
    return listItem;
}

function getAvailableProducts() {
    const ul = document.querySelector('section.products > ul');
    const li = document.createElement('li');
    ul.appendChild(li);
    const array = [];
    array.forEach((object) => {
        const subUl = document.createElement('ul');
        li.appendChild(subUl);
        subUl.appendChild(makeListItem('name', object.id));
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
console.log(products) 