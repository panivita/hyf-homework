const express = require('express')
const router = express.Router()
const dataMeals = require("../data/meals.json");

// Respond with the json for all the meals
router.get("/", (req, res) => {
  res.json(dataMeals);
});

//Get meals that has a price smaller than maxPrice
router.get("/add", (req, res) => {
  const { maxPrice } = req.query;
  const numMaxPrice = parseInt(maxPrice);
  if (isNaN(numMaxPrice)) {
    res.status(400).send(`Bad request. ${maxPrice} should be a number`);
  } else {
    const mealsWithSmallerPrice = dataMeals.filter(
      ({ price }) => price < numMaxPrice
    );
    res.json(mealsWithSmallerPrice);
  }
});

// Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const queriedIdMeals = dataMeals.find((meal) => meal.id === parseInt(id));
  if (isNaN(id)) {
    res.status(400).send(`Bad request. ${id} should be a number`);
  }
  if (!queriedIdMeals) {
    res.status(404).send(`Meal with the id ${id} is not found`);
  } else {
    res.json(queriedIdMeals);
  }
});

module.exports = router;
