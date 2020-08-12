import React from "react";
import { useForm, Controller } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { formatDate } from "react-day-picker/moment";

const AddTodoForm = ({ onSubmit }) => {
  const { register, handleSubmit, control } = useForm();

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
      <br />
      <label>
        <span>Deadline</span>

        <Controller
          defaultValue=""
          control={control}
          name="deadline"
          render={({ onChange, onBlur, value }) => (
            <DayPickerInput
              onDayChange={onChange}
              onBlur={onBlur}
              selected={value}
              formatDate={formatDate}
              placeholder="DD/MM/YYYY"
            />
          )}
        />
      </label>
      <br />
      <button>Add todo</button>
    </form>
  );
};

export default AddTodoForm;
