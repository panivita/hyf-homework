// Respond with the json for a random reservation

const dataReservations = require("../data/reservations.json");

module.exports = (req, res) => {
    const random = Math.floor(Math.random() * dataReservations.length);
    const randomReservation = dataReservations[random];
  return res.json(randomReservation);
};