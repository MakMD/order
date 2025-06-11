import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ServicesPage.module.css";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/UI/Button/Button";

const ServicesPage = () => {
  const { t } = useTranslation();

  const coreDevelopmentServices = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3 3m-3 12l3-3m-6 0l3-3m-4-3a2 2 0 114 0 2 2 0 01-4 0z"
          ></path>
        </svg>
      ),
      title: t("services_core_dev_title"),
      description: t("services_core_dev_desc"),
      features: [
        t("services_core_dev_f1"),
        t("services_core_dev_f2"),
        t("services_core_dev_f3"),
        t("services_core_dev_f4"),
      ],
      link: "/contact?service=custom-development",
    },
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h5M20 20v-5h-5M4 20L20 4"
          ></path>
        </svg>
      ),
      title: t("services_modernization_title"),
      description: t("services_modernization_desc"),
      features: [
        t("services_modernization_f1"),
        t("services_modernization_f2"),
        t("services_modernization_f3"),
        t("services_modernization_f4"),
      ],
      link: "/contact?service=modernization",
    },
  ];

  const growthServices = [
    {
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      title: t("services_maintenance_title"),
      description: t("services_maintenance_desc"),
      features: [
        t("services_maintenance_f1"),
        t("services_maintenance_f2"),
        t("services_maintenance_f3"),
        t("services_maintenance_f4"),
      ],
      link: "/contact?service=maintenance",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.pageTitle}>{t("services_page_title")}</h1>
            <p className={styles.pageSubtitle}>{t("services_page_subtitle")}</p>
          </div>
          <div className={styles.servicesGrid}>
            {coreDevelopmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>
              {t("services_partnership_title")}
            </h2>
          </div>
          <div className={styles.servicesGridSingle}>
            {growthServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.customCta}>
            <h3 className={styles.ctaTitle}>{t("services_cta_title")}</h3>
            <p className={styles.ctaSubtitle}>{t("services_cta_subtitle")}</p>
            <Link to="/contact?service=other">
              <Button variant="secondary">{t("services_cta_button")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
