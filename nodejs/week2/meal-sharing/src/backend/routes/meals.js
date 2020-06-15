// Respond with the json for all the meals

const dataMeals = require("../data/meals.json");
module.exports = (req, res) => {
    return res.json(dataMeals);
  };