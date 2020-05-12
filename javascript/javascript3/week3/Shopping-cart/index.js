class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {}
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
      ulProducts.innerHTML += `<li><span>${product.name}</span>: <span>${product.price} kr</span></li>`;
    });
    const total = document.createElement("p");
    shoppingCart.appendChild(total);
    total.innerHTML = `Total price: ${this.getTotal()} kr`;
  }
  //getUser should return a promise with the data from this api:
  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
const giftcard = new Product("Giftcard", 1000);
const computer = new Product("Computer", 7000);
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
      ulSearch.innerHTML = `<li><span>${product.name}</span>: <span>${product.price} kr</span></li>`;
    });
  }
});
