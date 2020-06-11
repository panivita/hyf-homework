// Respond with the json for all the meals (including it's reviews) that can fit lots of people

const dataMealWithReviews = require("../data/meals-with-reviews.js");

module.exports = (req, res) => {
  const largeMeals = dataMealWithReviews.filter((meal) => meal.maxNumberOfGuests >= 5);
  return res.json(largeMeals);
};
