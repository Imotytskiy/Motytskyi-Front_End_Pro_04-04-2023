import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Button from "./components/Button/Button";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./store/store";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './styles/lightdark';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); // отримуємо todos з Redux store

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <button onClick={toggleTheme}>
        Переключити на {isDarkMode ? 'світлу тему' : 'темну тему'}
      </button>
      <div className="wrapper">
        <h1>todo-list</h1>
        <TodoList todos={todos} buttonDelClick={buttonDelClick} />
      </div>
      <div>
        <Button
          buttonClick={buttonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
      </ThemeProvider>
  );
}

export default App;