import React from "react";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import "./booking-page.css";

const AddReservationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="fields" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        ref={register({ minLength: 2, maxLength: 10, pattern: /^[A-Za-z]+$/i })}
      ></input>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        ref={register({ minLength: 2, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
      ></input>
      <input
        type="text"
        id="email"
        placeholder="Email"
        ref={register({ required: true, validate: (input) => isEmail(input) })}
      ></input>
      <input
        type="text"
        id="phone"
        placeholder="Phone"
        ref={register({ required: true })}
      ></input>
      <input
        type="number"
        id="number-guests"
        placeholder="Number of guests"
      ></input>
      <button id="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default AddReservationForm;
