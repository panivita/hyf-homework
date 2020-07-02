import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Cupcake from "./cupcake.png";
import "./booking-page.css";

const CakeWithReviews = ({
  url,
  title,
  description,
  max_reservations,
  price,
  review_description,
  stars,
}) => (
  <>
    <div className="container">
      <img src={url} className="img-cake"></img>
      <section className="cake-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <b>Guests:</b> {max_reservations}
        </p>
        <p>
          <b>Price:</b> {price} dkk
        </p>
        <div className="cake-line">
            <div className="line-left"></div>
            <img src={Cupcake} alt="cupcake image" className="cupcake-img"/>
            <div className="line-right"></div>
        </div>
        <h2>Review</h2>
        <p>
          <Rater rating={stars} total={5} interactive={false} />
        </p>
        <p>{review_description}</p>
      </section>
    </div>
    <section className="form-container">
      <form class="fields">
        <input type="text" id="firstName" placeholder="First Name"></input>
        <input type="text" id="lastName" placeholder="Last Name"></input>
        <input type="text" id="email" placeholder="Email"></input>
        <input type="text" id="phone" placeholder="Phone"></input>
        <input
          type="number"
          id="number-guests"
          placeholder="Number of guests"
        ></input>
        <button id="submit" className="submit">
          Submit
        </button>
      </form>
    </section>
  </>
);

export const BookingPage = () => {
  const { id } = useParams();

  const [meals, setMeals] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/api/meals/" + id);
      const result = await response.json();
      setMeals(result);
    })();
  }, [id]);
  return (
    <div className="booking-container">
      {meals && meals.map((m) => <CakeWithReviews key={m.id} {...m} />)}
    </div>
  );
};
