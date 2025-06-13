import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./AboutUsPage.module.css";
import Button from "../components/UI/Button/Button";
import Section from "../components/layout/Section";

// Import new Icon components
import IconReact from "../components/icons/IconReact";
import IconCloud from "../components/icons/IconCloud";
import IconSync from "../components/icons/IconSync";

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.pageWrapper}>
      <Section variant="subtle">
        <div className={styles.heroContent}>
          <h1 className={styles.mainTitle}>{t("about_hero_title")}</h1>
          <p className={styles.mainSubtitle}>{t("about_hero_subtitle")}</p>
        </div>
      </Section>

      <Section title={t("about_philosophy_title")}>
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
      </Section>

      <Section title={t("about_spec_title")} variant="subtle">
        <div className={styles.specGrid}>
          <div className={styles.specCard}>
            <div className={styles.specIcon}>
              <IconReact />
            </div>
            <h4>{t("about_spec_1_title")}</h4>
            <p>{t("about_spec_1_desc")}</p>
          </div>
          <div className={styles.specCard}>
            <div className={styles.specIcon}>
              <IconCloud />
            </div>
            <h4>{t("about_spec_2_title")}</h4>
            <p>{t("about_spec_2_desc")}</p>
          </div>
          <div className={styles.specCard}>
            <div className={styles.specIcon}>
              <IconSync />
            </div>
            <h4>{t("about_spec_3_title")}</h4>
            <p>{t("about_spec_3_desc")}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2>{t("about_cta_title")}</h2>
          <p className={styles.ctaSubtitle}>{t("about_cta_subtitle")}</p>
          <Link to="/contact">
            <Button>{t("about_cta_button")}</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AboutUsPage;
