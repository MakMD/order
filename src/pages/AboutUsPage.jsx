import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./AboutUsPage.module.css";
import Button from "../components/UI/Button/Button";

const SpecializationIcon = ({ children }) => (
  <div className={styles.specIcon}>{children}</div>
);

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>{t("about_hero_title")}</h1>
          <p className={styles.mainSubtitle}>{t("about_hero_subtitle")}</p>
        </div>
      </section>

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

      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>{t("about_spec_title")}</h2>
          </div>
          <div className={styles.specGrid}>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2.5a9.5,9.5 0 1,0 9.5,9.5a9.5,9.5 0 0,0 -9.5,-9.5m0,1.46a8,8 0 1,1 -8,8a8,8 0 0,1 8,-8m-4.66,4.31l-1.1,1.9l2.35,1.35l-2.35,1.36l1.1,1.9l4.7,-2.72l-4.7,-2.79m5.32,0l4.7,2.79l-4.7,2.72l1.1,1.9l2.35,-1.36l-2.35,-1.35l1.1,-1.9z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>{t("about_spec_1_title")}</h4>
              <p>{t("about_spec_1_desc")}</p>
            </div>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.35,10.04a7.5,7.5 0 0,0 -14,-2a5.5,5.5 0 0,0 -0.5,11h14.5a4.5,4.5 0 0,0 0,-9z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>{t("about_spec_2_title")}</h4>
              <p>{t("about_spec_2_desc")}</p>
            </div>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4.1,3.5l1.4,1.4c3.1,-3.1 8.2,-3.1 11.3,0c1.2,1.2 1.9,2.7 2.1,4.3l1.9,0c-0.2,-2.3 -1.2,-4.5 -2.8,-6.1c-4.2,-4.2 -11,-4.2 -15.2,0l1.3,1.4m15.8,15.6l-1.4,-1.4c-3.1,3.1 -8.2,3.1 -11.3,0c-1.2,-1.2 -1.9,-2.7 -2.1,-4.3l-1.9,0c0.2,2.3 1.2,4.5 2.8,6.1c4.2,4.2 11,4.2 15.2,0l-1.3,-1.4z M17,12c0,2.8 -2.2,5 -5,5s-5,-2.2 -5,-5s2.2,-5 5,-5s5,2.2 5,5z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>{t("about_spec_3_title")}</h4>
              <p>{t("about_spec_3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container} style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>{t("about_cta_title")}</h2>
          <p className={styles.sectionSubtitle}>{t("about_cta_subtitle")}</p>
          <Link to="/contact">
            <Button>{t("about_cta_button")}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
