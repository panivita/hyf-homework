import React from 'react';
import './App.css';

const TodoList = (props) => {
  const todoItems = props.data.map((todo, index) =>
  <li key={index}>
    {todo.description}, {todo.deadline}
  </li>
);
  return (
    <ul>{todoItems}</ul>
  );
}

const TodoListSection = (props) => {
  return (
    <section className="todoList">
      <TodoList data={props.data}/>
    </section>
  );
}

const App = () => {
  const todoData = [
    {description: "Get out of bed" , deadline: "Wed Sep 13 2017"},
    {description: "Brush teeth" , deadline: "Thu Sep 14 2017"},
    {description: "Eat breakfast" , deadline: "Fri Sep 15 2017"},
  ];
  return (
    <>
      <h1>My ToDo list</h1>
      <TodoListSection data={todoData} />
    </>
  );
}

export default App;
