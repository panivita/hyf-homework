import React from "react";
import TodoItem from "./todo-item";
import PropTypes from "prop-types";

const TodoList = ({ data = [], onCheck, onDelete, onEdit }) => {
  const todoItems = data.map((item) => (
    <TodoItem
      key={item.id}
      todo={item}
      onCheck={onCheck}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ));
  return <ul className="itemsList">{todoItems}</ul>;
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes)),
};

export default TodoList;
