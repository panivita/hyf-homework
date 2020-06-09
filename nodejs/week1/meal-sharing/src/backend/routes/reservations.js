// Respond with the json for all reservations
const express = require("express");
const dataReservations = require("../data/reservations.json");

const app = express();

app.get("/", (req, res) => {
  return res.json(dataReservations);
});

module.exports = app;
 
/* const dataReservations = require("../data/reservations.json");

module.exports = (req, res) => {
  return res.json(dataReservations);
};*/