import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; {currentYear} {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
