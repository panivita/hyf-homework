import React, { useState, useEffect } from "react";
import "./App.css";

const TodoList = (props) => {
  const todoItems = props.data.map((todo) => (
    <li key={todo.id}>{todo.description}</li>
  ));
  return <ul>{todoItems}</ul>;
};

const TodoListSection = (props) => {
  return (
    <section className="todoList">
      <TodoList data={props.data} />
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
    },
    {
      id: 2,
      description: "Brush teeth",
    },
    {
      id: 3,
      description: "Eat breakfast",
    },
  ];
  return (
    <>
      <h1>My ToDo list</h1>
      <Timer />
      <TodoListSection data={todoData} />
    </>
  );
};

export default App;
