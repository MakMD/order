import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { caseStudies } from "../../data/case-studies-data";
import Section from "../../components/layout/Section";
import styles from "./CaseStudyDetailPage.module.css";
import Button from "../../components/UI/Button/Button";

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const caseStudy = caseStudies.find((study) => study.slug === slug);

  if (!caseStudy) {
    return (
      <Section title="Кейс не знайдено" subtitle="Повернутися до списку кейсів">
        <Link to="/case-studies">
          <Button>Усі кейси</Button>
        </Link>
      </Section>
    );
  }

  const lang = i18n.language;

  const {
    title,
    client,
    year,
    description,
    mainImage,
    technologies,
    liveDemoUrl,
    githubRepoUrl,
    challenge,
    solution,
    results,
    gallery,
  } = caseStudy;

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.meta}>
            {client[lang] || client.uk} • {year}
          </p>
          <h1 className={styles.title}>{title[lang] || title.uk}</h1>
          <p className={styles.description}>
            {description[lang] || description.uk}
          </p>
        </div>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.detailsGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {challenge.title[lang] || challenge.title.uk}
              </h2>
              <p>{challenge.text[lang] || challenge.text.uk}</p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {solution.title[lang] || solution.title.uk}
              </h2>
              <p>{solution.text[lang] || solution.text.uk}</p>
            </div>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                {results.title[lang] || results.title.uk}
              </h2>
              <ul className={styles.resultsList}>
                {results.items.map((item, index) => (
                  <li key={index}>{item[lang] || item.uk}</li>
                ))}
              </ul>
            </div>
          </div>
          <aside className={styles.rightColumn}>
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>
                {t("case_study_tech_title")}
              </h3>
              <div className={styles.tags}>
                {technologies.map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>

              {(liveDemoUrl || githubRepoUrl) && (
                <h3 className={`${styles.sidebarTitle} ${styles.linksTitle}`}>
                  {t("case_study_links_title")}
                </h3>
              )}
              <div className={styles.links}>
                {liveDemoUrl && (
                  <Button
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
                {githubRepoUrl && (
                  <Button
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    GitHub
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>

        {gallery && gallery.length > 0 && (
          <div className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>
              {t("case_study_gallery_title")}
            </h2>
            <div className={styles.galleryGrid}>
              {gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title[lang] || title.uk} screenshot ${index + 1}`}
                  className={styles.galleryImage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
