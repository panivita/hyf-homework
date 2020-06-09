//create the calculator using javascript classes
//Create a class called Circle. It should have one property called radius.
//The Circle class should have the following methods: getDiameter, getCircumference, getArea

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
  getArea() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
}

const circle1 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle1.getCircumference());
console.log(circle1.getArea());

const circle2 = new Circle(20);
console.log(circle2.getDiameter());
console.log(circle2.getCircumference());
console.log(circle2.getArea());
