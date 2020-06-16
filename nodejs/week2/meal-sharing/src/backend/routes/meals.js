const express = require("express");
const router = express.Router();
const dataMeals = require("../data/meals.json");

// Respond with the json for all the meals
//Get meals that has a price smaller than maxPrice.
// Get meals that partially match a title.
// Get meals that has been created after the date.
// Only specific number of meals.

router.get("/", (req, res) => {
  const { maxPrice, title: queryTitle, createdAfter } = req.query;
  let meals = dataMeals;

  if (maxPrice) {
    const numMaxPrice = parseInt(maxPrice);
    if (isNaN(numMaxPrice)) {
      res.status(400).send(`Bad request.`);
    } else {
      meals = meals.filter(({ price }) => price < numMaxPrice);
    }
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
