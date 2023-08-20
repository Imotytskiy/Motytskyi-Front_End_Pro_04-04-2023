import React from "react";

export default function DelButton({ todo, buttonDelClick }) {
  const handleDeleteClick = () => {
    buttonDelClick(todo.id);
  };

  return (
    <>
      <button onClick={handleDeleteClick} className="rm">
        &times;
      </button>
    </>
  );
}
