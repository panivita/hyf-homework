// Respond with the json for a random meal (including it's reviews)

const dataMealWithReviews = require("../data/meals-with-reviews.js");

module.exports = (req, res) => {
  const random = Math.floor(Math.random() * dataMealWithReviews.length);
  const randomMeal = dataMealWithReviews[random];
  return res.json(randomMeal);
};
