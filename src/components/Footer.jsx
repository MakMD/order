import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} My-Dev</p>
      </div>
    </footer>
  );
};

export default Footer;
