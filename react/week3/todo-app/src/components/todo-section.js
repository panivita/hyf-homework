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
    setTodos((t) => {
      const item = {
        id: t[t.length - 1]?.id + 1 || 1,
        description: val.description,
        deadline: val.deadline,
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
  const editItems = (id, value) => {
    setTodos((stateEdit) => {
      return stateEdit.map((t) => {
        if (t.id === id) {
          return { ...t, description: value };
        }
        return t;
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
