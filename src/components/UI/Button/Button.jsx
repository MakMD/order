import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Універсальний поліморфний компонент кнопки.
 * Може рендеритись як <button>, <a> або <Link> з react-router-dom.
 *
 * @param {'primary' | 'secondary'} variant - Варіант стилю.
 * @param {string} [to] - Внутрішній шлях для react-router-dom Link.
 * @param {string} [href] - Зовнішній URL для тегу <a>.
 * @param {React.ReactNode} children - Вміст кнопки.
 * @param {function} [onClick] - Обробник кліку для тегу <button>.
 * @param {'button' | 'submit' | 'reset'} [type='button'] - Тип для тегу <button>.
 * @param {boolean} [disabled=false] - Стан disabled.
 */
const Button = ({ children, variant = "primary", to, href, ...props }) => {
  const commonClasses = `${styles.button} ${styles[variant] || styles.primary}`;

  if (to) {
    return (
      <Link to={to} className={commonClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={commonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
