const appendReviewsToAllMeals = () => {
  const dataMeals = require("../data/meals.json");
  const dataReviews = require("../data/reviews.json");
  return dataMeals.map((meal) => {
    meal.reviews = dataReviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
};

module.exports = appendReviewsToAllMeals();
