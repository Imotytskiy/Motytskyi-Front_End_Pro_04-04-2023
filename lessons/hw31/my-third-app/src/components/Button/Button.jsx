import React from "react";

const Button = ({ buttonClick, inputValue, setInputValue }) => {
  const styles = {
    input: {
      textAlign: "center",
      padding: ".5rem 1rem",
      border: "2px solid blue",
      borderRadius: "5px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "100px",
      width: "500px",
    },
    button: {
      padding: ".5rem 1rem",
      border: "2px solid blue",
      borderRadius: "5px",
      marginBottom: ".5rem",
      width: "150px",
    },
    div: {
      textAlign: "center",
    },
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={styles.div}>
      <input
        style={styles.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />

      <button style={styles.button} onClick={buttonClick}>
        СПРАВА
      </button>
    </div>
  );
};

export default Button;
