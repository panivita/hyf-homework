import React, { useState } from "react";

const TodoList = ({ data = [], onCheck, onDelete }) => {
  const todoItems = data.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        name={todo.description}
        checked={todo.done && "checked"}
        onChange={() => onCheck(todo.id)}
      />
      <span className={todo.done ? "line-through" : "no-decoration"}>
        {todo.description}
      </span>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  ));
  return <ul>{todoItems}</ul>;
};

export const TodoListSection = ({ list = [] }) => {
  const [todos, setTodos] = useState(list);
  const addTodo = () => {
    setTodos((t) => {
      const item = {
        id: t[t.length - 1]?.id + 1 || 1,
        description: "Random text",
        done: false,
      };
      return [...t, item];
    });
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
  return (
    <section className="todoList">
      {todos.length ? (
        <TodoList data={todos} onCheck={handleCheck} onDelete={deleteItems} />
      ) : (
        <p className="info-no-items">No items to show, please add</p>
      )}
      <button className="add-todo" onClick={addTodo}>
        Add todo
      </button>
    </section>
  );
};
