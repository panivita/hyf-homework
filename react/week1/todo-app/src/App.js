import React from "react";
import "./App.css";
import { Timer } from "./components/timer";
import { TodoData } from "./components/todo-data";
import { TodoListSection } from "./components/todo-section";

const App = () => {
  return (
    <>
      <h1>My ToDo list</h1>
      <Timer />
      <TodoListSection list={TodoData} />
    </>
  );
};

export default App;
