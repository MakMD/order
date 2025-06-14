import React from "react";
import { Link } from "react-router-dom";
import styles from "./CaseStudyCard.module.css";

const CaseStudyCard = ({ caseStudy }) => {
  const { slug, title, description, mainImage, technologies } = caseStudy;

  return (
    <Link to={`/case-studies/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={mainImage} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
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
