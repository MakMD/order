import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactInfo.module.css";
import IconMail from "./icons/IconMail";
import IconPhone from "./icons/IconPhone";
import { siteConfig } from "../config/site"; // Імпортуємо конфігурацію

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactInfo}>
      {/* Виправлено ключ перекладу відповідно до i18n.jsx */}
      <h3 className={styles.title}>{t("contact_info_title")}</h3>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <IconMail className={styles.icon} />
          <a href={`mailto:${siteConfig.email}`} className={styles.link}>
            {siteConfig.email}
          </a>
        </div>
        <div className={styles.infoItem}>
          <IconPhone className={styles.icon} />
          <a href={`tel:${siteConfig.phone}`} className={styles.link}>
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
