import React from "react";
import styles from "../../Styles/Components/Form/Input.module.css";

const Input = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
