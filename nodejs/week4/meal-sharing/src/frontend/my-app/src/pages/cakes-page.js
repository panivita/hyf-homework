import React, { useState, useEffect } from "react";
import "./cakes-page.css";

const Meal = ({
  url,
  title,
  description,
  max_reservations,
  meal_time,
  price,
}) => (
  <div className="cake-container">
    <img src={url} className="img-cake"></img>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>
      <b>Guests:</b> {max_reservations}
    </p>
    <p>
      <b>Price:</b> {price} dkk
    </p>
    <button id="get-cake" className="booking">
      Book now
    </button>
  </div>
);

export const CakesPage = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/meals");
      const result = await response.json();
      setMeals(result);
    })();
  }, []);
  return (
    <div className="cakes">
      {meals && meals.map((m) => <Meal key={m.id} {...m} />)}
    </div>
  );
};
