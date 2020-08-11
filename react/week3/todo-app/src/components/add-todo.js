import React from "react";
import { useForm } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";

const UseAddTodoForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  console.log("ERR", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Todo description</span>
        <input
          type="text"
          placeholder="description"
          name="description"
          ref={register({
            required: {
              value: true,
              message: "Todo description is required",
            },
          })}
        />
      </label>
      <br></br>
      <label>
        <span>Deadline</span>
        <DayPickerInput
          name="deadline"
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={`${formatDate(new Date())}`}
          ref={register({
            required: {
              value: true,
              message: "Todo deadline is required",
            },
          })}
        />
      </label>
      <br></br>
      <button>Add todo</button>
    </form>
  );
};

export default UseAddTodoForm;
