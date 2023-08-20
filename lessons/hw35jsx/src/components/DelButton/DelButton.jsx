import React from "react";
// import Button from "react-bootstrap/Button";

export default function DelButton({ todo, buttonDelClick }) {
  const handleDeleteClick = () => {
    buttonDelClick(todo.id);
  };

  return (
    <>
      <button onClick={handleDeleteClick} className="rm">
        &times;
      </button>
      {/* <Button variant="danger">Danger</Button>{" "} */}
    </>
  );
}
