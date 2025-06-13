import React from "react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Section from "../components/layout/Section";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Section
      title={t("contact_page_title")}
      subtitle={t("contact_page_subtitle")}
      variant="subtle"
    >
      <div className={styles.grid}>
        <ContactForm />
        <ContactInfo />
      </div>
    </Section>
  );
};

export default ContactPage;
