import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Зв'яжіться з нами</h1>
          <p className={styles.subtitle}>
            Маєте ідею для проєкту? Заповніть форму, і ми зв'яжемося з вами.
          </p>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.grid}>
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
