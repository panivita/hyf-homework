class Product {
    constructor(imgUrl, name, price) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
  }
  //Depending on the provided currency return the correct price for the product
  convertToCurrency(currency) {
    return fetch(
      "http://data.fixer.io/api/latest?access_key=c7a543598b656e4e1890f15c03a6e1ec"
    )
      .then((res) => res.json())
      .then((result) => {
        const rate = result.rates[currency];
        return rate * this.price;
      });
  }
}

//Create the functionality for the ShoppingCart class.
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  //addProduct should add a product to the products array.
  addProduct(product) {
    this.products.push(product);
  }
  //removeProduct should remove a product from the products array.
  removeProduct(product) {
    const newProduct = this.products.filter((existing) => {
      return existing.name !== product.name;
    });
    this.products = newProduct;
  }
  //searchProduct should return an array of product that match the productName parameter
  searchProduct(productName) {
    return this.products.filter((p) => RegExp(productName, "i").test(p.name));
  }
  //getTotal should get the total price of the products in the shoppingcart.
  getTotal() {
    return this.products.map((p) => p.price).reduce((acc, cur) => (acc += cur));
  }
  //renderProducts should render the products to html.
  // Also render the username and the total price of the products in the shoppingcart
  renderProducts() {
    const shoppingCart = document.getElementById("shopping-cart");
    const ulProducts = document.createElement("ul");
    shoppingCart.appendChild(ulProducts);
    this.products.forEach((product) => {
      ulProducts.innerHTML += `<li><img src="${product.imgUrl}"></img>
      <span>${product.name}</span> <span>${product.price} EUR</span></li>`;
    });
    const total = document.createElement("p");
    shoppingCart.appendChild(total);
    total.innerHTML = `Total price: ${this.getTotal()} EUR`;
  }
  //getUser should return a promise with the data from this api:
  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}

class ProductList {
  constructor(imgUrl, name, price) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
  }
  renderProductList() {
    const productsUl = document.querySelector("section.products ul");
    this.imgUrl.forEach((product) => {
      productsUl.innerHTML = `<li><img src="${product.imgUrl}"></img></li>`;
    });
    this.name.forEach((product) => {
      productsUl.innerHTML = `<li>${product.name}</li>`;
    });
    this.price.forEach((product) => {
      productsUl.innerHTML = `<li>${product.price}</li>`;
    });
  }
}
const 





const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 500);
const giftcard = new Product("Giftcard", 100);
const computer = new Product("Computer", 700);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(giftcard);
shoppingCart.addProduct(computer);
shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart.getTotal());
shoppingCart.getUser();
shoppingCart.renderProducts();
console.log(shoppingCart);

//Searching for products
const inputSearch = document.querySelector(".search > input");

inputSearch.addEventListener("keyup", () => {
  const productName = inputSearch.value;
  const divSearch = document.getElementById("search-results");
  divSearch.innerHTML = "";
  if (productName) {
    const ulSearch = document.createElement("ul");
    divSearch.appendChild(ulSearch);
    shoppingCart.searchProduct(productName).forEach((product) => {
      ulSearch.innerHTML = `<li><span>${product.name}</span>: <span>${product.price} EUR</span></li>`;
    });
  }
});

// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("USD"));
