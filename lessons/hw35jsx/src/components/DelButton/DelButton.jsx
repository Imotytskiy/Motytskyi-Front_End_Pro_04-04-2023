import React from "react";
import { useDispatch } from "react-redux";
import { delTodo } from "../../store/store";

export default function DelButton({ todo }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(delTodo(todo.id));
  };

  return (
    <>
      <button onClick={handleDeleteClick} className="rm">
        &times;
      </button>
    </>
  );
}
