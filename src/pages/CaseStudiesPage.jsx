import React from "react";
import styles from "./CaseStudiesPage.module.css";

const CaseStudiesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Кейси</h1>
        <p className={styles.subtitle}>
          Тут будуть історії успіху моїх клієнтів. Розділ у розробці.
        </p>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
