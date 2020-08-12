import React, { useState } from "react";
import moment from "moment";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
dom.watch();
library.add(faTrashAlt, faEdit);

const ItemStyle = (props) => <li className="item">{props.children}</li>;

const TodoItem = ({ todo, onCheck, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(todo.description);

  return (
    <ItemStyle>
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
        <i className="fas fa-trash-alt"></i>Delete
      </button>
      {edit ? (
        <button
          onClick={() => {
            onEdit(todo.id, description);
            setEdit(false);
          }}
        >
          <i className="fas fa-edit"></i>Update
        </button>
      ) : (
        <button onClick={() => setEdit(true)}>
          <i className="fas fa-edit"></i>Edit
        </button>
      )}
    </ItemStyle>
  );
};
export default TodoItem;

TodoItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  deadline: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  done: PropTypes.bool,
};
