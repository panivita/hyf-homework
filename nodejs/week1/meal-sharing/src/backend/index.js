const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Instead of writing the functionality for the routes inside index.js. 
// Create a routes folder that contains meals.js, meal.js, etc.
const mealsRouter = require("./routes/meals");
const cheapMealsRouter = require("./routes/cheap-meals");
const largeMealsRouter = require("./routes/large-meals");
const mealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations");
const reservationRouter = require("./routes/reservation");

app.get("/meals", mealsRouter);
app.get("/cheap-meals", cheapMealsRouter);
app.get("/large-meals", largeMealsRouter);
app.get("/meal", mealRouter);
app.get("/reservations", reservationsRouter);
app.get("/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.send(`
<ul>
    <li><a href='/meals'>all-meals</a></li>
    <li><a href='/cheap-meals'>cheap-meals</a></li>
    <li><a href='/large-meals'>large-meals</a></li>
    <li><a href='/meal'>single-meal</a></li>
    <li><a href='/reservations'>all-reservations</a></li>
    <li><a href='/reservation'>single-reservation</a></li>
</ul>   
`);
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
