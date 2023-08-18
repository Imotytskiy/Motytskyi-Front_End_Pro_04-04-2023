import React from "react";
import TodoItem from "./TodoItem";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};
export default function TodoList({ todos, buttonDelClick }) {
  return (
    <ul style={styles.ul}>
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
