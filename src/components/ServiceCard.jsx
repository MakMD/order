import React from "react";
import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Імпортуємо хук

const ServiceCard = ({ icon: Icon, title, description, features, link }) => {
  const { t } = useTranslation(); // Ініціалізуємо хук

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {features && (
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      {link && (
        <Link to={link} className={styles.link}>
          {t("service_card_learn_more")} {/* Використовуємо переклад */}
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
