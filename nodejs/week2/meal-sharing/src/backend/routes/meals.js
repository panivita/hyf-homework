const express = require("express");
const router = express.Router();
const dataMeals = require("../data/meals.json");

// Respond with the json for all the meals
//Get meals that has a price smaller than maxPrice.
// Get meals that partially match a title.
// Get meals that has been created after the date.
// Only specific number of meals.
const isParametersInvalid = (reqQuery, res) => {
  const { maxPrice, createdAfter, limit } = reqQuery;
  if (maxPrice) {
    if (isNaN(maxPrice)) {
      res.status(400).send(`Bad request. MaxPrice should be a number`);
      return true;
    }
  }
  if (createdAfter) {
    const date = Date.parse(createdAfter);
    if (isNaN(date) && !(date instanceof Date)) {
      res
        .status(400)
        .send(`Bad request. createdAfter should be a number and date`);
      return true;
    }
  }
  if (limit) {
    if (isNaN(limit) || limit < 0) {
      res.status(400).send(`Bad request. Limit should be a number`);
      return true;
    }
  }
  return false;
};

router.get("/", (req, res) => {
  const { maxPrice, title: queryTitle, createdAfter, limit } = req.query;

  if (isParametersInvalid(req.query, res)) {
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

  if (meals.length === 0) {
    res.status(404).send(`404 Error. Meal is not found`);
  }
  res.json(meals);
});

// Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const queriedIdMeals = dataMeals.find((meal) => meal.id === parseInt(id));

  if (isNaN(id)) {
    res.status(400).send(`Bad request. ${id} should be a number`);
    return;
  }

  if (!queriedIdMeals) {
    res.status(404).send(`Meal with the id ${id} is not found`);
    return;
  }

  res.json(queriedIdMeals);
});

module.exports = router;
