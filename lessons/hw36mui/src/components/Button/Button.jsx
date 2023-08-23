import React from "react";
import styles from "./Button.module.css";
import Button from '@mui/material/Button'; 
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
      <Button variant="contained" onClick={buttonClick}>
        СПРАВА
      </Button>
    </div>
  );
};

export default ButtonAdd;
