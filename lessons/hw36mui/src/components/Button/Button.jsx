import React from "react";
import styles from "./Button.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const ButtonAdd = ({ buttonClick, inputValue, setInputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.div}>
      <TextField
        // className={styles.input}
        type="text" 
        value={inputValue}
        onChange={handleChange}
      />
      <Button size="large"  variant="contained" onClick={buttonClick}>
        СПРАВА
      </Button>
    </div>
  );
};

export default ButtonAdd;
