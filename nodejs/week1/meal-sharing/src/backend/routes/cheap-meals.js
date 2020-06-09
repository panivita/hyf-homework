// Respond with the json for all the meals (including it's reviews) that are cheap

const dataMeals = require("../data/meals.json");
const dataReviews = require("../data/reviews.json");

module.exports = (req, res) => {
  const cheapMeals = dataMeals
    .filter((meal) => meal.price <= 70)
    .map((meal) => {
      meal.reviews = dataReviews.filter((review) => review.mealId === meal.id);
      return meal;
    });
  return res.json(cheapMeals);
};
