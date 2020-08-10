import React from "react";
import "./App.css";
import { Timer } from "./components/timer";
import { TodoListSection } from "./components/todo-section";

const App = () => {
  
  return (
    <>
      <h1>My ToDo list</h1>
      <Timer />
      <TodoListSection />
    </>
  );
};

export default App;
