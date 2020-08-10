import React, { useState, useEffect } from "react";
import UseAddTodoForm from "./add-todo";

const TodoList = ({ data = [], onCheck, onDelete, onEdit }) => {
  const todoItems = data.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        name={(todo.description, todo.deadline)}
        checked={todo.done && "checked"}
        onChange={() => onCheck(todo.id)}
      />
      <span className={todo.done ? "line-through" : "no-decoration"}>
        {todo.description} | {todo.deadline}
      </span>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
    </li>
  ));
  return <ul>{todoItems}</ul>;
};

export const TodoListSection = ({ list = [] }) => {
  const [todos, setTodos] = useState(list);

  useEffect(() => {
    const baseUrl =
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);
  const itemId = todos[todos.length - 1]?.id + 1 || 1;

  const addTodo = (randomItem) => {
    const newItem = [...todos, randomItem];
    setTodos(newItem);
  };

  const handleCheck = (id) => {
    setTodos((stateCheck) => {
      const check = stateCheck.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      });
      return check;
    });
  };
  const deleteItems = (id) => {
    setTodos((stateDelete) => {
      const deletedItem = stateDelete.filter((t) => t.id !== id);
      return deletedItem;
    });
  };
  const editItems = (id, value) => {
    setTodos((stateEdit) => {
      const editedItem = stateEdit.map((t) => {
        if (t.id === id) {
          return { ...t, description: value };
        }
        return t;
      });
      return editedItem;
    });
  };
  return (
    <section className="todoList">
      {UseAddTodoForm(addTodo, itemId)}
      {todos.length ? (
        <TodoList
          data={todos}
          onCheck={handleCheck}
          onDelete={deleteItems}
          onEdit={editItems}
        />
      ) : (
        <p className="info-no-items">No items to show, please add</p>
      )}
    </section>
  );
};
