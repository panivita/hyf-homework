console.log("index.js 1");

const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const port = process.env.PORT || 3000;
console.log("index.js 2");
const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");
const reviewsRouter = require("./api/reviews");
console.log("index.js 3");
// For week4 no need to look into this!
// Serve the built client html
const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("karrrramba");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
