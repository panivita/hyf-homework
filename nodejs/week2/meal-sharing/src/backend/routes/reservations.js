// Respond with the json for the reservation with the corresponding id
const express = require("express");
const router = express.Router();
const dataReservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const queriedIdReservations = dataReservations.find(
    (r) => r.id === parseInt(id)
  );
  if (isNaN(id)) {
    res.status(400).send(`Bad request. ${id} should be a number`);
  }
  if (!queriedIdReservations) {
    res.status(404).send(`Reservation with the id ${id} is not found`);
  } else {
    res.json(queriedIdReservations);
  }
});

// Respond with the json for all the reservations

router.get("/", (req, res) => {
  res.json(dataReservations);
});

module.exports = router;
  
