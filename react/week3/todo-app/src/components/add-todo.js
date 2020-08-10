import React from "react";
import { useForm } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const onSubmitForm = (formData) => {
  console.log("The status of formData", formData);
  alert(": " + formData.description);
};

const UseAddTodoForm = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  console.log("ERR", errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
            dayPickerProps={{
              showWeekNumbers: true,
              todayButton: "Today",
            }}
            name="deadline"
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
    </>
  );
};

export default UseAddTodoForm;
