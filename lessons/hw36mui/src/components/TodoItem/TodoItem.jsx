import React from "react";
import DelButton from "../DelButton/DelButton";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../store/store";
import styles from "./TodoItem.module.css";
import Checkbox from '@mui/material/Checkbox';

export default function TodoItem({ todo, index, buttonDelClick }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <li className={styles.li}>
      <label className={styles.label}>
      <Checkbox
  checked={todo.completed}
  onChange={handleClick}
  color="secondary"
  inputProps={{ 'aria-label': 'controlled' }}
  readOnly
/>
        <b>{index + 1}.&ensp; </b>
        <span
          className={
            todo.completed ? styles.inputTextCrossed : styles.inputText
          }
        >
          {todo.title}
        </span>
      </label>
      <DelButton todo={todo} buttonDelClick={buttonDelClick} />
    </li>
  );
}
