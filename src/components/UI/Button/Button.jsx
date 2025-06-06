import React from "react";
import styles from "./Button.module.css";

/**
 * Універсальний компонент кнопки
 * @param {'primary' | 'secondary'} variant - Варіант стилю кнопки
 * @param {'button' | 'submit' | 'reset'} type - Тип кнопки
 */
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const buttonClass = styles[variant] || styles.primary;

  return (
    <button
      type={type}
      className={`${styles.button} ${buttonClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
