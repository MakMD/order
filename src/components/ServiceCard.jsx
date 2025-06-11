import React from "react";
import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, features, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
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
          Дізнатися більше
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
