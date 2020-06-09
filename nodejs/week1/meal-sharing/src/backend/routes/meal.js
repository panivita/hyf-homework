// Respond with the json for a random meal (including it's reviews)

const dataMeals = require("../data/meals.json");
const dataReviews = require("../data/reviews.json");

module.exports = (req, res) => {
  const random = Math.floor(Math.random() * dataMeals.length);
  const randomMeal = dataMeals[random];
  randomMeal.reviews = dataReviews.filter((review) => {
    return review.mealId === randomMeal.id;
  });
  return res.json(randomMeal);
};
