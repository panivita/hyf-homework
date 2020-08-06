import React, { useState, useEffect } from "react";
import "./App.css";

const TodoList = ({ data = [], handleCheck }) => {
  const deleteItem = (id) => {
    const [stateDelete, setDelete] = useState(id);
    setDelete(stateDelete.filter((t) => t.id !== id));
  };
  const todoItems = data.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        name={todo.description}
        checked={todo.done && "checked"}
        onChange={() => handleCheck(todo.id)}
      />
      <span className={todo.done ? "line-through" : "no-decoration"}>
        {todo.description}
      </span>

      <button onClick={() => deleteItem(todo.id)}>Delete</button>
    </li>
  ));
  return <ul>{todoItems}</ul>;
};

const TodoListSection = ({ list = [] }) => {
  const [todos, setTodos] = useState(list);
  const addTodo = () => {
    setTodos((t) => {
      const item = {
        id: t.length + 1,
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
      return check
    });
  };
  return (
    <section className="todoList">
      <TodoList data={todos} handleCheck={handleCheck} />
      <button className="add-todo" onClick={addTodo}>
        Add todo
      </button>
    </section>
  );
};

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <p>You have used {seconds} seconds on this website</p>;
};

const App = () => {
  const todoData = [
    {
      id: 1,
      description: "Get out of bed",
      done: false,
    },
    {
      id: 2,
      description: "Brush teeth",
      done: false,
    },
    {
      id: 3,
      description: "Eat breakfast",
      done: false,
    },
  ];
  return (
    <>
      <h1>My ToDo list</h1>
      <Timer />
      <TodoListSection list={todoData} />
    </>
  );
};

export default App;
