// For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 
// For meals that do not have any reviews, the "reviews" property will be an empty array. 

const dataMeals = require("../data/meals.json");
const dataReviews = require("../data/reviews.json");

module.exports = (req, res) => {
  dataMeals.map((meal) => {
    meal.reviews = dataReviews.filter((review) => review.mealId === meal.id);
  });
  return res.json(dataMeals);
};
