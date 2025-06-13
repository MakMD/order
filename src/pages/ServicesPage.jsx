import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ServicesPage.module.css";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/layout/Section";
import IconRocket from "../components/icons/IconRocket";
import IconRefresh from "../components/icons/IconRefresh";
import IconCog from "../components/icons/IconCog";
import Button from "../components/UI/Button/Button";

const ServicesPage = () => {
  const { t } = useTranslation();

  const coreServices = [
    {
      icon: IconRocket,
      title: t("services_core_dev_title"),
      description: t("services_core_dev_desc"),
      features: [
        t("services_core_dev_f1"),
        t("services_core_dev_f2"),
        t("services_core_dev_f3"),
        t("services_core_dev_f4"),
      ],
      link: "/contact?service=web-development",
    },
    {
      icon: IconRefresh,
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

  const partnershipService = {
    icon: IconCog,
    title: t("services_maintenance_title"),
    description: t("services_maintenance_desc"),
    features: [
      t("services_support_f1"),
      t("services_support_f2"),
      t("services_support_f3"),
      t("services_support_f4"),
    ],
    link: "/contact?service=maintenance",
  };

  return (
    <>
      <Section
        title={t("services_page_title")}
        subtitle={t("services_page_subtitle")}
        variant="subtle"
      >
        <div className={styles.servicesGrid}>
          {coreServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section title={t("services_partnership_title")}>
        <div className={styles.singleServiceGrid}>
          <ServiceCard {...partnershipService} />
        </div>
      </Section>

      <Section variant="subtle">
        <div className={styles.ctaSection}>
          <h3>{t("services_cta_title")}</h3>
          <p>{t("services_cta_subtitle")}</p>
          <Link to="/contact?service=other">
            <Button variant="primary">{t("services_cta_button")}</Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;
