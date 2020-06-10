// Respond with the json for all reservations

const dataReservations = require("../data/reservations.json");

module.exports = (req, res) => {
  return res.json(dataReservations);
};