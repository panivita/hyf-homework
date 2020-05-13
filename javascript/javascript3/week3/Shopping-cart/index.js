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
  constructor(container) {
    this.container = container;
    this.products = [
      new Product("images/dress-3.png", "Dress polka dots", 50),
      new Product("images/dress-4.png", "Little black dress", 80),
      new Product("images/dress-9.jpg", "Little red dress", 80),
      new Product("images/dress.png", "Pink dress", 30),
      new Product("images/gown.png", "Long red dress", 90),
      new Product("images/long-dress.png", "Green dress", 30),
      new Product("images/pants.png", "Pants", 50),
      new Product("images/skirt.jpg", "Skirt", 20),
      new Product("images/wedding-dress.png", "Wedding dress", 100),
      new Product("images/wedding-dress-2.png", "Pink wedding dress", 100),
    ];
    this.renderProductList();
  }
  renderProductList() {
    const productsSection = this.container;
    this.products.forEach((product) => {
      const liProduct = document.createElement("li");
      liProduct.innerHTML = `
        <ul>
            <li><img src="${product.imgUrl}"></img></li>
            <li>${product.name}</li>
            <li>${product.price}EUR</li>
        </ul>`;
      productsSection.appendChild(liProduct);
      const buttonLi = document.createElement("li");
      const btn = document.createElement("Button");
      btn.innerHTML = "Add to cart";
      buttonLi.appendChild(btn);
      liProduct.appendChild(buttonLi);
      //btn.addEventListener("click", () => shoppingCart.addProduct(product));
    });
  }
}

const shoppingCart = new ShoppingCart();
// shoppingCart.addProduct(dress1);
// shoppingCart.addProduct(dress7);
// shoppingCart.addProduct(dress8);
// shoppingCart.removeProduct(dress9);
// console.log(shoppingCart.getTotal());
// shoppingCart.getUser();
// shoppingCart.renderProducts();
// console.log(shoppingCart);

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

new ProductList(document.querySelector("section.products ul"));

// Assuming dkr as default currency
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("USD"));
