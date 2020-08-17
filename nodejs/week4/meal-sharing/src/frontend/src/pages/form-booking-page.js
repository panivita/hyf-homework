import React from "react";
import { useForm } from "react-hook-form";
import "./booking-page.css";

const AddReservationForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="fields" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        ref={register({ required: true, maxLength: 10 })}
      ></input>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        ref={register({ required: true, maxLength: 10 })}
      ></input>
      <input
        type="text"
        id="email"
        placeholder="Email"
        ref={register({ required: true })}
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
