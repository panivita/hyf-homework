// Respond with the json for the meal with the corresponding id
const express = require("express");
const router = express.Router();
const dataReviews = require("../data/reviews.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const queriedIdReviews = dataReviews.find(
    (review) => review.id === parseInt(id)
  );
  if (isNaN(id)) {
    res.status(400).send(`Bad request. ${id} should be a number`);
  }
  if (!queriedIdReviews) {
    res.status(404).send(`Review with the id ${id} is not found`);
  }
  res.json(queriedIdReviews);
});

// Respond with the json for all the reviews

router.get("/", (req, res) => {
  res.json(dataReviews);
});

module.exports = router;
