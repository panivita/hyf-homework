import React, { useState, useEffect } from "react";
import AddTodoForm from "./add-todo";
import moment from "moment";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
dom.watch();
library.add(faTrashAlt, faEdit);

const TodoList = ({ data = [], onCheck, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(data.description);

  const editItem = (id) => {
    if (edit) onEdit(id, description);
    setEdit(!edit);
  };
  const todoItems = data.map((todo) => (
    <li key={todo.id}>
      <input
        type="checkbox"
        name={todo.description}
        checked={todo.done && "checked"}
        onChange={() => onCheck(todo.id)}
      />
      <span className={todo.done ? "line-through" : "no-decoration"}>
        {edit ? (
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <>
            {todo.description} | {moment(todo.deadline).format("YYYY-MM-DD")}
          </>
        )}
      </span>

      <button onClick={() => onDelete(todo.id)}>
        <i class="fas fa-trash-alt"></i>Delete
      </button>
      <button onClick={() => editItem(todo.id)}>
        <i class="fas fa-edit"></i>Edit
      </button>
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

  const addTodo = (val) => {
    debugger;
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
