import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => { // valor que tiver dentro do componete é children
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
