import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./HomePage.module.css";
import Button from "../components/UI/Button/Button";
import FeatureCard from "../components/FeatureCard";
import ServiceOverviewCard from "../components/ServiceOverviewCard";

const HomePage = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: (
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6M5 21v-5a2 2 0 012-2h10a2 2 0 012 2v5m-14 0h14"
          ></path>
        </svg>
      ),
      title: t("home_feature_1_title"),
      description: t("home_feature_1_desc"),
    },
    {
      icon: (
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          ></path>
        </svg>
      ),
      title: t("home_feature_2_title"),
      description: t("home_feature_2_desc"),
    },
    {
      icon: (
        <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      ),
      title: t("home_feature_3_title"),
      description: t("home_feature_3_desc"),
    },
  ];

  const servicesOverviewData = [
    {
      title: t("home_key_service_1_title"),
      description: t("home_key_service_1_desc"),
    },
    {
      title: t("home_key_service_2_title"),
      description: t("home_key_service_2_desc"),
    },
    {
      title: t("home_key_service_3_title"),
      description: t("home_key_service_3_desc"),
    },
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>{t("home_hero_title")}</h1>
          <p className={styles.heroSubtitle}>{t("home_hero_subtitle")}</p>
          <Link to="/services">
            <Button>{t("home_hero_button")}</Button>
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>{t("home_features_title")}</h2>
            <p className={styles.sectionSubtitle}>
              {t("home_features_subtitle")}
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>
              {t("home_key_services_title")}
            </h2>
            <p className={styles.sectionSubtitle}>
              {t("home_key_services_subtitle")}
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {servicesOverviewData.map((service, index) => (
              <ServiceOverviewCard key={index} {...service} />
            ))}
          </div>
          <div className={styles.viewAllLinkWrapper}>
            <Link to="/services" className={styles.viewAllLink}>
              {t("home_view_all_services")}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>{t("home_cta_title")}</h2>
          <p className={styles.ctaSubtitle}>{t("home_cta_subtitle")}</p>
          <Link to="/contact">
            <Button
              variant="secondary"
              style={{ backgroundColor: "white", color: "#3b82f6" }}
            >
              {t("home_cta_button")}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
