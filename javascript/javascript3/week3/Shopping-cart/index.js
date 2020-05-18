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
    this.removeProduct(product);
    this.products.push(product);
    this.renderProducts();
  }
  //removeProduct should remove a product from the products array.
  removeProduct(product) {
    this.products = this.products.filter((existing) => {
      return existing.name !== product.name;
    });
  }
  //getTotal should get the total price of the products in the shoppingcart.
  getTotal() {
    return this.products
      .map((p) => p.price)
      .reduce((acc, cur) => (acc += cur), 0);
  }
  //getUser should return a promise with the data from this api:
  getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((result) => {
        return result.username;
      });
  }
  //renderProducts should render the products in the shopping cart to html.
  // Also render the username and the total price of the products in the shoppingcart
  async renderProducts() {
    const shopCart = document.getElementById("shopping-cart");
    shopCart.innerHTML = null;
    this.products.forEach((product) => {
      const productCont = document.createElement("div");
      shopCart.appendChild(productCont);
      productCont.innerHTML = `
            <div><img src="${product.imgUrl}"></img></div>
            <div>${product.name}</div>
            <div>${product.price} EUR</div>`;
      const buttonDiv = document.createElement("div");
      const removeBtn = document.createElement("Button");
      removeBtn.innerHTML = "Remove";
      buttonDiv.appendChild(removeBtn);
      productCont.appendChild(buttonDiv);

      removeBtn.addEventListener("click", () => {
        this.removeProduct(product);
        this.renderProducts();
      });
    });

    const usernameTag = document.querySelector(".cart > h1");
    const username = await this.getUser();
    usernameTag.innerHTML = `<i>${username}</i> Shopping cart`;
    const total = document.createElement("p");
    shopCart.appendChild(total);
    total.innerHTML = `Total price: ${this.getTotal()} EUR`;
  }
}

class ProductList {
  constructor(container) {
    this.container = container;
    this.products = [
      new Product("images/dress-3.png", "Dress polka dots", 50),
      new Product("images/wedding-dress.png", "Wedding dress", 100),
      new Product("images/dress-4.png", "Little black dress", 80),
      new Product("images/dress-9.jpg", "Little red dress", 80),
      new Product("images/dress.png", "Pink dress", 30),
      new Product("images/long-dress.png", "Green dress", 30),
      new Product("images/gown.png", "Long red dress", 90),
      new Product("images/wedding-dress-2.png", "Pink wedding dress", 100),
      new Product("images/pants.png", "Pants", 50),
      new Product("images/skirt.jpg", "Skirt", 20),
    ];
    this.filteredProducts = this.products;
    this.renderProductList();
  }
  //searchProduct should return an array of product that match the productName parameter
  searchProduct(productName) {
    if (productName) {
      this.filteredProducts = this.products.filter((p) =>
        RegExp(productName, "i").test(p.name)
      );
    } else {
      this.filteredProducts= this.products;
    }
  }
  renderProductList() {
    const productsSection = this.container;
    productsSection.innerHTML = null;
    this.filteredProducts.forEach((product) => {
      const productCont = document.createElement("div");
      productsSection.appendChild(productCont);
      productCont.innerHTML = `
            <div><img src="${product.imgUrl}"></img></div>
            <div>${product.name}</div>
            <div>${product.price} EUR</div>`;
      const buttonDiv = document.createElement("div");
      const btn = document.createElement("Button");
      btn.innerHTML = "Add to cart";
      buttonDiv.appendChild(btn);
      productCont.appendChild(buttonDiv);

      btn.addEventListener("click", () => {
        shoppingCart.addProduct(product);
      });
    });
  }
}

const shoppingCart = new ShoppingCart();
const shoppingList = new ProductList(
  document.querySelector("section.products")
);

//Searching for products
const inputSearch = document.querySelector(".search > input");
inputSearch.addEventListener("keyup", () => {
  const productName = inputSearch.value;
  const filteredProducts = shoppingList.searchProduct(productName);
  shoppingList.renderProductList(filteredProducts);
});
