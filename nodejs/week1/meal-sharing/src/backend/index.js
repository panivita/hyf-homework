const express = require("express");
const app = express();
const port = 3000;
//const port = process.env.PORT || 3000;

// Instead of writing the functionality for the routes inside index.js. 
// Create a routes folder that contains meals.js, meal.js, etc.
const mealsRouter = require("./routes/meals");
const cheapMealsRouter = require("./routes/cheap-meals");
const largeMealsRouter = require("./routes/large-meals");
const mealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations");
const reservationRouter = require("./routes/reservation");

app.get("/meals", mealsRouter);
// app.get("/cheap-meals", cheapMealsRouter);
// app.get("/large-meals", largeMealsRouter);
// app.get("/meal", mealRouter);
// app.get("/reservations", reservationsRouter);
// app.get("/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.send(`
<ul>
    <li><a href='/meals'>meals</a></li>
</ul>   
`);
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
