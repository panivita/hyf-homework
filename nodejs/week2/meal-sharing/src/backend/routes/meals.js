const express = require("express");
const router = express.Router();
const dataMeals = require("../data/meals.json");

// Respond with the json for all the meals
//Get meals that has a price smaller than maxPrice.
// Get meals that partially match a title.
// Get meals that has been created after the date.
// Only specific number of meals.
const isParametersValid = (reqQuery, res) => {
  const { maxPrice, title: queryTitle, createdAfter, limit } = reqQuery;
  if (maxPrice || limit || createdAfter) {
    const date = Date.parse(createdAfter);
    if ((isNaN(maxPrice) && isNaN(date) && isNaN(limit)) || limit < 0) {
      res.status(400).send(`Bad request. Parameter should be a number`);
      return false;
    }
  }
  return true;
};

router.get("/", (req, res) => {
  const { maxPrice, title: queryTitle, createdAfter, limit } = req.query;

  if (!isParametersValid(req.query, res)) {
    return;
  }

  let meals = dataMeals;

  if (maxPrice) {
    const numMaxPrice = parseInt(maxPrice);
    meals = meals.filter(({ price }) => price < numMaxPrice);
  }

  if (queryTitle) {
    const escapedQuery = queryTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // All of these should be escaped. Means the whole matched string
    const tester = new RegExp("(?:^|\\W)" + escapedQuery + "(?:$|\\W)", "i"); //only whole world from start of the string and whole world from end
    //(?title=alien will not return meal with title Italien)

    meals = meals.filter(({ title }) => tester.test(title));
  }

  if (createdAfter) {
    const parseCreatedAfter = Date.parse(createdAfter);
    meals = meals.filter(
      ({ createdAt }) => Date.parse(createdAt) > parseCreatedAfter
    );
  }
  if (limit) {
    const numlimit = parseInt(limit);
    meals = meals.slice(0, numlimit);
  }
  res.json(meals);
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
