import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import Button from "../components/UI/Button/Button";
import FeatureCard from "../components/FeatureCard";
import Section from "../components/layout/Section";
import TechLogos from "../components/TechLogos";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Icon components
import IconBuilding from "../components/icons/IconBuilding";
import IconCode from "../components/icons/IconCode";
import IconLightning from "../components/icons/IconLightning";
import IconRocket from "../components/icons/IconRocket";
import IconRefresh from "../components/icons/IconRefresh";
import IconCog from "../components/icons/IconCog";

const AnimatedGrid = ({ items, CardComponent }) => {
  const [gridRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={gridRef}
      className={clsx(styles.featuresGrid, "fade-in-section", {
        "is-visible": isVisible,
      })}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={clsx("fade-in-section", { "is-visible": isVisible })}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <CardComponent {...item} />
        </div>
      ))}
    </div>
  );
};

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
      <div className={styles.heroSection}>{/* ... hero content ... */}</div>

      <Section
        title={t("home_features_title")}
        subtitle={t("home_features_subtitle")}
      >
        <AnimatedGrid items={featuresData} CardComponent={FeatureCard} />
      </Section>

      <Section title={t("home_tech_stack_title")}>
        <TechLogos />
      </Section>

      <Section
        title={t("home_key_services_title")}
        subtitle={t("home_key_services_subtitle")}
        variant="subtle"
      >
        <AnimatedGrid items={keyServicesData} CardComponent={FeatureCard} />
        <div className={styles.viewAllServicesLink}>
          <Button to="/services" variant="secondary">
            {t("home_view_all_services")}
          </Button>
        </div>
      </Section>

      <Section>{/* ... cta section ... */}</Section>
    </>
  );
};

export default HomePage;
