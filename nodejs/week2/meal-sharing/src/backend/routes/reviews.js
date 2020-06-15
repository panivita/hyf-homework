

const dataReviews = require("../data/reviews.json");
module.exports = (req, res) => {
    return res.json(dataReviews);
  };