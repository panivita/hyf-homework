console.log('Script loaded');

const makerLists = (className, key) => {
    const lists = document.createElement('li');
    lists.classList.add(className);
    lists.innerHTML = key;
    return lists;
}
//Create some extra feature. Shopping cart.
const items = [];
const onClickBuy = (product) => {
    const ulCart = document.querySelector('section.cart > ul');
    const liName = document.createElement('li');
    liName.innerHTML = product.name;
    const liPrice = document.createElement('li');
    liPrice.innerHTML = product.price;
    ulCart.appendChild(liName);
    ulCart.appendChild(liPrice);
    items.push(product.price);

    const totalPrice = items.reduce((a, c ) => (a += c));
    const totalCartInfo = document.querySelector('div.total > p > span');
    totalCartInfo.innerHTML = totalPrice;
}

const renderProducts = (products) => {
    const ul = document.querySelector('section.products > ul');
    ul.innerHTML = null;
    products.forEach((product) => {
        const li = document.createElement('li');
        ul.appendChild(li);
        const subUl = document.createElement('ul');
        li.appendChild(subUl);
        subUl.appendChild(makerLists('id', product.id));
        subUl.appendChild(makerLists('name', product.name));
        subUl.appendChild(makerLists('price', product.price));
        subUl.appendChild(makerLists('rating', product.rating));

        const subLi = document.createElement('li');
        subLi.classList.add('shipsTo');
        const shipsToUl = document.createElement('ul');
        subLi.appendChild(shipsToUl);
        subUl.appendChild(subLi);

        product.shipsTo.forEach((country) => {
            const countryLi = document.createElement('li');
            countryLi.innerHTML = country;
            shipsToUl.appendChild(countryLi);
        })
        //Create some extra feature. Button 'Add to cart'
        const buttonLi = document.createElement('li');
        const btn = document.createElement('Button');
        btn.innerHTML = 'Add to cart';
        buttonLi.appendChild(btn);
        subUl.appendChild(buttonLi);
        btn.addEventListener('click', () => onClickBuy(product));
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

