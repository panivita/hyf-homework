// For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 
// For meals that do not have any reviews, the "reviews" property will be an empty array. 

const dataMealWithReviews = require("../data/meals-with-reviews.js");

module.exports = (req, res) => {
  return res.json(dataMealWithReviews);
};
