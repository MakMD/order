import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ContactInfo.module.css";
import IconMail from "./icons/IconMail";
import IconPhone from "./icons/IconPhone";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.title}>{t("contactPage.info.title")}</h3>
      <div className={styles.infoList}>
        <div className={styles.infoItem}>
          <IconMail className={styles.icon} />
          <a href="mailto:floor-boss-work@gmail.com" className={styles.link}>
            floor-boss-work@gmail.com
          </a>
        </div>
        <div className={styles.infoItem}>
          <IconPhone className={styles.icon} />
          <a href="tel:+380961112233" className={styles.link}>
            +380961112233
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
