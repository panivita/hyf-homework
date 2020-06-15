// Respond with the json for the meal with the corresponding id
const express = require("express");
const router = express.Router()
const dataReviews = require("../data/reviews.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const queriedIdReviews = dataReviews.find(
    (review) => review.id === parseInt(id)
  );
  if (isNaN(id)) {
    return res.status(400).send(`Bad request. ${id} should be a number`);
  }
  if (!queriedIdReviews) {
    return res.status(404).send(`Review with the id ${id} is not found`);
  } else {
    return res.json(queriedIdReviews);
  }
});

// Respond with the json for all the reviews

router.get("/", (req, res) => {
  return res.json(dataReviews);
});

module.exports = router;
