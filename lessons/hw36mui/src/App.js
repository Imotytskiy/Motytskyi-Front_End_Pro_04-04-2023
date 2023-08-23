import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import ButtonAdd from "./components/Button/Button";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./store/store"; 
import '@fontsource/roboto/400.css';
import { ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from "./afterdark";

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
      </ThemeProvider>
    </>
  );
}

export default App;
