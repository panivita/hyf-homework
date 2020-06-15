const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals");
const reservationsRouter = require("./routes/reservations");
const reviewsRouter = require("./routes/reviews");

app.use((request, response, next) => {
    const time = new Date().toLocaleString("en-US", { hour12: false });
    console.log(`${time} request received for path: ${request.originalUrl}`);
    next();
  });

app.get("/meals", mealsRouter);
app.get("/reservations", reservationsRouter);
app.get("/reviews", reviewsRouter);


app.get("/", (req, res) => {
  res.send(`
  <ul>
    <li><a href='/meals'>All meals</a></li>
    <li><a href='/reservations'>All reservations</a></li>
    <li><a href='/reviews'>All reviews</a></li>
  </ul>
  `);
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
