import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";
import Button from "./UI/Button/Button";

const ServiceCard = ({ icon, title, description, features, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className={styles.buttonWrapper}>
          <Link to={link}>
            <Button>Замовити розробку</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
