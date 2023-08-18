import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import { createStore } from "redux";
import { v4 as uuid } from "uuid";

function App() {
  const initialTodos = [];

  const [data, setData] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const buttonClick = () => {
    if (inputValue.trim() === "") {
      return; // Якщо введений пустий рядок, нічого не робимо
    }
    const unique_id = uuid();
    const newTodo = {
      id: unique_id.slice(0, 8),
      position: data.length + 1,
      completed: false,
      title: inputValue,
    };

    setData([...data, newTodo]);
    setInputValue(""); // Очищуємо поле вводу після додавання справи
  };
  const buttonDelClick = (delId) => {
    console.log(delId);
    const updatedData = data.filter((item) => item.id !== delId);
    setData(updatedData);
  };

  return (
    <>
      <div className="wrapper">
        <h1>todo-list</h1>
        <TodoList todos={data} buttonDelClick={buttonDelClick} />
      </div>
      <div>
        <Button
          buttonClick={buttonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
}

export default App;
