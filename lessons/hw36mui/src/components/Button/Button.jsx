import React from "react";
import styles from "./Button.module.css";

const ButtonAdd = ({ buttonClick, inputValue, setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={buttonClick}>
        СПРАВА
      </button>
    </div>
  );
};

export default ButtonAdd;
