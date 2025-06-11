import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./AboutUsPage.module.css";
import Button from "../components/UI/Button/Button";
import FeatureCard from "../components/FeatureCard"; // Імпортуємо FeatureCard

const AboutUsPage = () => {
  const { t } = useTranslation();

  // Дані для карток спеціалізації
  const specializations = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 2.002c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10s10-4.477 10-10c0-5.522-4.478-10-10-10zm0 18.002c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.32-10.395c.22-.48.133-1.065-.2-1.45l-1.39-1.643c-.333-.385-.91-.53-1.404-.38l-4.223 1.25c-.495.15-1.01 1.01-1.01 1.01s-.18.39-.18.88c0 .49.18.88.18.88s.44.86 1.01 1.01l4.224 1.25c.494.15.91-.53.91-.53s.42-.64.2-1.45c-.22-.81 1.48-1.594 1.48-1.594s-1.7-.783-1.48-1.595zM12 13.33a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66z" />
        </svg>
      ),
      title: t("about_spec_1_title"),
      description: t("about_spec_1_desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      title: t("about_spec_2_title"),
      description: t("about_spec_2_desc"),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.1 3.5l1.4 1.4c3.1-3.1 8.2-3.1 11.3 0 1.2 1.2 1.9 2.7 2.1 4.3l1.9 0c-0.2-2.3-1.2-4.5-2.8-6.1-4.2-4.2-11-4.2-15.2 0l1.3 1.4m15.8 15.6l-1.4-1.4c-3.1 3.1-8.2 3.1-11.3 0-1.2-1.2-1.9-2.7-2.1-4.3l-1.9 0c0.2 2.3 1.2 4.5 2.8 6.1 4.2 4.2 11 4.2 15.2 0l-1.3-1.4zM17 12c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5z" />
        </svg>
      ),
      title: t("about_spec_3_title"),
      description: t("about_spec_3_desc"),
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section - без змін */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        {/* ... код секції hero ... */}
      </section>

      {/* Philosophy Section - без змін у JSX, але стилі оновлені */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>
              {t("about_philosophy_title")}
            </h2>
          </div>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>{t("about_philosophy_1_title")}</h3>
              <p>{t("about_philosophy_1_desc")}</p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>{t("about_philosophy_2_title")}</h3>
              <p>{t("about_philosophy_2_desc")}</p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>{t("about_philosophy_3_title")}</h3>
              <p>{t("about_philosophy_3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section - ЗАМІНА НА FeatureCard */}
      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>{t("about_spec_title")}</h2>
          </div>
          <div className={styles.specGrid}>
            {specializations.map((spec, index) => (
              <FeatureCard
                key={index}
                icon={spec.icon}
                title={spec.title}
                description={spec.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - без змін */}
      <section className={styles.section}>
        {/* ... код секції CTA ... */}
      </section>
    </div>
  );
};

export default AboutUsPage;
