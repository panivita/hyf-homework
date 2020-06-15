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

app.use("/api/meals", mealsRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/reviews", reviewsRouter);

app.get("/", (req, res) => {
  res.send(`
  <ul>
    <li><a href='/api/meals'>All meals</a></li>
    <li><a href='/api/reservations'>All reservations</a></li>
    <li><a href='/api/reviews'>All reviews</a></li>
  </ul>
  `);
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
