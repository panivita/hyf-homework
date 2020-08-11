import React, { useState, useEffect } from "react";
import AddTodoForm from "./add-todo";
import moment from "moment";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
dom.watch();
library.add(faTrashAlt, faEdit);

const TodoList = ({ data = [], onCheck, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(data.description);

  const editItem = (id) => {
    if (edit) onEdit(id, description);
    setEdit(!edit);
  };
  const todoItems = data.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        name={todo.description}
        checked={todo.done && "checked"}
        onChange={() => onCheck(todo.id)}
      />
      <span className={todo.done ? "line-through" : "no-decoration"}>
        {edit ? (
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <>
            {todo.description} | {moment(todo.deadline).format("YYYY-MM-DD")}
          </>
        )}
      </span>

      <button onClick={() => onDelete(todo.id)}>
        <i class="fas fa-trash-alt"></i>Delete
      </button>
      <button onClick={() => editItem(todo.id)}>
        <i class="fas fa-edit"></i>Edit
      </button>
    </li>
  ));
  return <ul>{todoItems}</ul>;
};
export default AddTodoForm;