import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Timer } from "./components/timer";
import { TodoListSection } from "./components/todo-section";

const App = () => {
  return (
    <>
      <Header />
      <Timer />
      <TodoListSection />
    </>
  );
};

export default App;
