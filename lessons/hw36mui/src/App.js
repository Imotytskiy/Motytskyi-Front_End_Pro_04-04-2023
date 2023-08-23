import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import ButtonAdd from "./components/Button/Button";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./store/store";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const buttonClick = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const unique_id = uuid();
    const newTodo = {
      id: unique_id.slice(0, 8),
      position: todos.length + 1,
      completed: false,
      title: inputValue,
    };

    dispatch(addTodo(newTodo));
    setInputValue("");
  };

  const buttonDelClick = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div className="wrapper">
        <h1>todo-list</h1>
        <TodoList todos={todos} buttonDelClick={buttonDelClick} />
      </div>
      <div>
        <ButtonAdd
          buttonClick={buttonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
}

export default App;
