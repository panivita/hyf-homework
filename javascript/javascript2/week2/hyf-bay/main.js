console.log('Script loaded');

function makerLists(className, key) {
    const lists = document.createElement('li');
    lists.classList.add(className);
    lists.innerHTML = key;
    return lists;
}

function renderProducts(products) {
    const ul = document.querySelector('section.products > ul');
    ul.innerHTML = null;
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
        subLi.classList.add('shipsTo');
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

//Searching for products
const inputSearch = document.querySelector('.search > input');
inputSearch.addEventListener('keyup', () => {
    const query = inputSearch.value;
    if (query) {
        const filteredProducts = products.filter(p => RegExp(query, 'i').test(p.name));
        renderProducts(filteredProducts);
    } else {
        renderProducts(products);
    }
})

//Showing products that ships to country - optional
const countrySelect = document.querySelector('.country > select');
countrySelect.addEventListener('change', () => {
    const textSelect = countrySelect.options[countrySelect.selectedIndex].text;
    if (textSelect) {
        const filteredProducts = products.filter(p => p.shipsTo.includes(textSelect));
        renderProducts(filteredProducts);
    } else {
        renderProducts(products);
    }
});

//Sort the products - optional
const sortSelect = document.querySelector('.sort > select');
sortSelect.addEventListener('change', () => {
    const valueSort = sortSelect.options[sortSelect.selectedIndex].value;
    if (valueSort === 'cheap') {
        const sortCheapProducts = products.sort((a, b) => a.price - b.price);
        renderProducts(sortCheapProducts);
    } if (valueSort === 'expensive') {
        const sortExpensiveProducts = products.sort((a, b) => b.price - a.price);
        renderProducts(sortExpensiveProducts);
    } if (valueSort === 'name') {
        const sortNameProducts = products.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        renderProducts(sortNameProducts);
    } else {
        renderProducts(products);
    }
});

