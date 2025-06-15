import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import Button from "../components/UI/Button/Button";
import FeatureCard from "../components/FeatureCard";
import Section from "../components/layout/Section";
import TechLogos from "../components/TechLogos";

// Import Icon components
import IconBuilding from "../components/icons/IconBuilding";
import IconCode from "../components/icons/IconCode";
import IconLightning from "../components/icons/IconLightning";
import IconRocket from "../components/icons/IconRocket";
import IconRefresh from "../components/icons/IconRefresh";
import IconCog from "../components/icons/IconCog";

const HomePage = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: IconBuilding,
      title: t("home_feature_1_title"),
      description: t("home_feature_1_desc"),
    },
    {
      icon: IconCode,
      title: t("home_feature_2_title"),
      description: t("home_feature_2_desc"),
    },
    {
      icon: IconLightning,
      title: t("home_feature_3_title"),
      description: t("home_feature_3_desc"),
    },
  ];

  const keyServicesData = [
    {
      icon: IconRocket,
      title: t("home_key_service_1_title"),
      description: t("home_key_service_1_desc"),
    },
    {
      icon: IconRefresh,
      title: t("home_key_service_2_title"),
      description: t("home_key_service_2_desc"),
    },
    {
      icon: IconCog,
      title: t("home_key_service_3_title"),
      description: t("home_key_service_3_desc"),
    },
  ];

  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t("home_hero_title")}</h1>
          <p className={styles.heroSubtitle}>{t("home_hero_subtitle")}</p>
          <div className={styles.heroButtons}>
            <Button to="/services" variant="primary">
              {t("home_hero_button")}
            </Button>
          </div>
        </div>
      </div>

      <Section
        title={t("home_features_title")}
        subtitle={t("home_features_subtitle")}
      >
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>

      <Section title={t("home_tech_stack_title")}>
        <TechLogos />
      </Section>

      <Section
        title={t("home_key_services_title")}
        subtitle={t("home_key_services_subtitle")}
        variant="subtle"
      >
        <div className={styles.featuresGrid}>
          {keyServicesData.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </div>
        <div className={styles.viewAllServicesLink}>
          <Button to="/services" variant="secondary">
            {t("home_view_all_services")}
          </Button>
        </div>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2>{t("home_cta_title")}</h2>
          <p>{t("home_cta_subtitle")}</p>
          <Button to="/contact" variant="primary">
            {t("home_cta_button")}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;
