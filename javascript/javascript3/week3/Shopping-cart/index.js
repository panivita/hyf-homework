class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
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
  renderProducts() {}
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
console.log(shoppingCart);
