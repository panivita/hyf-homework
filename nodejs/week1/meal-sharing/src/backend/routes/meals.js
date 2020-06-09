const meals = require("../data/meals.json");

module.exports = function (req, res) {
  res.json(meals);
};
