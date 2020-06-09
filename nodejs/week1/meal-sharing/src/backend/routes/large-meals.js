// Respond with the json for all the meals (including it's reviews) that can fit lots of people

const dataMeals = require("../data/meals.json");
const dataReviews = require("../data/reviews.json");

module.exports = (req, res) => {
  const largeMeals = dataMeals
    .filter((meal) => meal.maxNumberOfGuests >= 5)
    .map((meal) => {
      meal.reviews = dataReviews.filter((review) => review.mealId === meal.id);
      return meal;
    });
  return res.json(largeMeals);
};

