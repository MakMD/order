import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./CaseStudyCard.module.css";

const CaseStudyCard = ({ caseStudy }) => {
  const { i18n } = useTranslation();
  const { slug, title, description, mainImage, technologies } = caseStudy;

  const lang = i18n.language;
  const currentTitle = title[lang] || title.uk;
  const currentDescription = description[lang] || description.uk;

  return (
    <Link to={`/case-studies/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={mainImage} alt={currentTitle} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{currentTitle}</h3>
        <p className={styles.description}>{currentDescription}</p>
        <div className={styles.tags}>
          {technologies.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
