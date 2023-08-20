import React from "react";
import DelButton from "./DelButton";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/store";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "2px solid blue",
    borderRadius: "5px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
  inputText: {
    textDecoration: "none",
  },
  inputTextCrossed: {
    textDecoration: "line-through",
    color: "red",
  },
};

export default function TodoItem({ todo, index, buttonDelClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li style={styles.li}>
      <label style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <input
          type="checkbox"
          style={styles.input}
          onClick={handleClick}
          checked={todo.completed}
          readOnly
        />
        <b>{index + 1}. </b>
        <span
          style={todo.completed ? styles.inputTextCrossed : styles.inputText}
        >
          {todo.title}
        </span>
      </label>
      <DelButton todo={todo} buttonDelClick={buttonDelClick} />
    </li>
  );
}
