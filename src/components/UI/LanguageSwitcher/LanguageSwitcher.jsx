import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => changeLanguage("uk")}
        className={i18n.language === "uk" ? styles.active : ""}
        aria-label="Switch to Ukrainian"
      >
        UA
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={i18n.language === "en" ? styles.active : ""}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
