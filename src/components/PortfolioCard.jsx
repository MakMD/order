import React from "react";
import styles from "./PortfolioCard.module.css";
import Tag from "./UI/Tag/Tag";
import Button from "./UI/Button/Button";

const PortfolioCard = ({ project }) => {
  const { image, title, description, tags, link } = project;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={`Зображення проєкту ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tagsWrapper}>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button>Переглянути проєкт</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
