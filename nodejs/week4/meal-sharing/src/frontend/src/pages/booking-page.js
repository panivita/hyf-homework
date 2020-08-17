import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import AddReservationForm from "./form-booking-page";
import Cupcake from "./cupcake.png";
import Cakes from "./cakes.png";
import "./booking-page.css";

const CakeWithReviews = ({
  url,
  title,
  description,
  max_reservations,
  price,
  review_description,
  stars,
  onSubmit,
}) => (
  <>
    <div className="container">
      <img src={url} className="img-cake" alt="cupcake"></img>
      <section className="cake-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <b>Servings:</b> {max_reservations}
        </p>
        <p>
          <b>Price:</b> {price} dkk
        </p>
        <div className="cupcake-line">
          <div className="line-left"></div>
          <img src={Cupcake} alt="cupcake" className="cupcake-img" />
          <div className="line-right"></div>
        </div>
        <h2>Review</h2>
        <p>
          <Rater rating={stars} total={5} interactive={false} />
        </p>
        <p>{review_description}</p>
      </section>
    </div>
    <div className="cakes-line">
      <div className="line-left"></div>
      <img src={Cakes} alt="thre cakes" className="cakes-img" />
      <div className="line-right"></div>
    </div>
    <section className="form-container">
      <div className="description">
        <p>
          Please contact me if you would like to order or discuss a celebration
          cake design. Let me help you make your own happy memories by me
          creating the perfect cake for you. Every cake I create with a little
          bit of love given by me.
        </p>
      </div>
      <AddReservationForm onSubmit={onSubmit} />
    </section>
  </>
);

export const BookingPage = () => {
  const { id } = useParams();

  const [meals, setMeals] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/meals/" + id);
      const result = await response.json();
      setMeals(result);
    })();
  }, [id]);
  const onSubmit = ({
    first_name,
    last_name,
    email,
    phone,
    number_of_guests,
  }) => {
    fetch("/api/reservations/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        number_of_guests: number_of_guests,
        meal_id: id,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
    debugger;
  };
  return (
    <div className="booking-container">
      {meals &&
        meals.map((m) => (
          <CakeWithReviews key={m.id} {...m} onSubmit={onSubmit} />
        ))}
    </div>
  );
};
