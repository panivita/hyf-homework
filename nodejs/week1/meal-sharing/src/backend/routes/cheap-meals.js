// Respond with the json for all the meals (including it's reviews) that are cheap

const dataMealWithReviews = require("../data/meals-with-reviews.js");

module.exports = (req, res) => {
  const cheapMeals = dataMealWithReviews.filter((meal) => meal.price <= 70);
  return res.json(cheapMeals);
};
