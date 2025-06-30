import React from "react";
import clsx from "clsx";
import styles from "./Section.module.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Section = ({
  children,
  title,
  subtitle,
  variant = "default",
  id = "",
}) => {
  const [containerRef, isVisible] = useScrollAnimation({
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Анімація спрацює, коли 10% секції з'явиться на екрані
  });

  const sectionClasses = clsx(
    styles.section,
    "fade-in-section", // Початковий стан анімації
    {
      [styles.subtle]: variant === "subtle",
      "is-visible": isVisible, // Клас, що запускає анімацію
    }
  );

  return (
    <section id={id} className={sectionClasses} ref={containerRef}>
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
