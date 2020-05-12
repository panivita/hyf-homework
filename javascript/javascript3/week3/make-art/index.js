const canvas = document.getElementById("circle");

// What if we wanted the canvas to have the same width and height of the screen?
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//Draw a circle on the canvas
const drawCircle = () => {
  if (canvas.getContext) {
    const circle = canvas.getContext("2d");
    const centerX = 100;
    const centerY = 75;
    const radius = 50;
    circle.beginPath();
    circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    circle.lineWidth = 3;
    circle.strokeStyle = "green"; //color setting
    circle.fillStyle = "green"; //color setting
    circle.fill();
    circle.stroke();
  }
};
drawCircle();

//Create a class called Circle.
// The circle should have one method: draw that draws the circle to the canvas.
// Drawing the circle first happens when we call the draw method.
class Circle {
  constructor(canvas, x, y, r, startAngle, endAngle, fillColor) {
    if (!canvas.getContext) throw "Wrong canvas";
    this.context = canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle * Math.PI
    );
    this.context.lineWidth = 3;
    this.context.strokeStyle = this.fillColor;
    this.context.fillStyle = this.fillColor;
    this.context.fill();
    this.context.stroke();
  }
}
const circle1 = new Circle(canvas, 50, 50, 20, 0, 2 * Math.PI, "#000000");
circle1.draw();
const circle2 = new Circle(canvas, 250, 80, 10, 0, 2 * Math.PI, "red");
circle2.draw();

//Every 100ms create a new circle class and draw that to the canvas.
//The circle should have random x, y, radius and color.

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb( ${r}, ${g}, ${b})`;
};

const drawNewCircle = () => {
  const { width, height } = canvas.getBoundingClientRect();
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const radius = Math.floor(Math.random() * 50);
  const circle = new Circle(
    canvas,
    x,
    y,
    radius,
    0,
    2 * Math.PI,
    getRandomColor()
  );
  circle.draw();
};

setInterval(drawNewCircle, 100);

//Instead of the circles just randomly appearing on the screen, make them appear around the cursor.
const onMouseMove = (event) => {
  const randomRadius = Math.floor(Math.random() * 50);
  const circle = new Circle(
    canvas,
    event.clientX,
    event.clientY,
    randomRadius,
    0,
    2 * Math.PI,
    getRandomColor()
  );
  circle.draw();
};
canvas.addEventListener("mousemove", onMouseMove); //circles randomly around the cursor
canvas.addEventListener("click", onMouseMove); //circles randomly when you click mouse
