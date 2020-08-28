import React, { useState, useEffect } from "react";
import AddTodoForm from "./add-todo";
import TodoList from "./todo-list";

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

  const addTodo = (val) => {
    setTodos((todo) => {
      const item = {
        id: todo[t.length - 1]?.id + 1 || 1,
        description: val.description,
        deadline: val.deadline,
        done: false,
      };
      return [...todo, item];
    });
  };

  const handleCheck = (id) => {
    setTodos((stateCheck) => {
      const check = stateCheck.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      return check;
    });
  };
  const deleteItems = (id) => {
    setTodos((stateDelete) => {
      const deletedItem = stateDelete.filter((todo) => todo.id !== id);
      return deletedItem;
    });
  };
  const editItems = (id, value) => {
    setTodos((stateEdit) => {
      return stateEdit.map((todo) => {
        if (todo.id === id) {
          return { ...todo, description: value };
        }
        return todo;
      });
    });
  };
  return (
    <section className="todoList">
      <AddTodoForm onSubmit={addTodo} />
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
