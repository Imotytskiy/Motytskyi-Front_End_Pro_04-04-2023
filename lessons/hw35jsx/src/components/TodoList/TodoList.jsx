import React from "react";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ todos, buttonDelClick }) {
  return (
    <ul className={styles.ul}>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={todo.id}
          buttonDelClick={buttonDelClick}
        />
      ))}
    </ul>
  );
}
