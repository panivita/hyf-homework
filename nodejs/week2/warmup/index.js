const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Add 2 routes to index.js:
//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
//GET /numbers/multiply/<first number here>/<second number here>.
//in response send multiplication (first * second).

app.get("/numbers/add", (req, res) => {
  const { first, second } = req.query;

  if (!first || !second) {
    res.send("First add numbers to url, e.g. /numbers/add?first=2&second=2");
  }
  if (isNaN(first) || isNaN(second)) {
    res.send("Both parameters should be numbers");
  } else {
    const sum = parseInt(first) + parseInt(second);
    res.send(`${first} + ${second} = ${sum}`);
  }
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
  const { first, second } = req.params;
  if (!isNaN(first) && !isNaN(second)) {
    const multiplication = parseInt(first) * parseInt(second);
    res.send(`${first} * ${second} = ${multiplication}`);
  } else {
    res.send("Both parameters should be numbers");
  }
});

app.get("/numbers/multiply/*", (req, res) => {
  res.send("First add numbers to url, e.g. /numbers/multiply/2/2");
});

app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
