import React from "react";
import styles from "./Section.module.css";

const Section = ({
  children,
  title,
  subtitle,
  variant = "default",
  id = "",
}) => {
  const sectionClasses = `${styles.section} ${
    variant === "subtle" ? styles.subtle : ""
  }`;

  return (
    <section id={id} className={sectionClasses}>
      <div className={styles.container}>
        {(title || subtitle) && (
          <div className={styles.heading}>
            {title && <h2>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
