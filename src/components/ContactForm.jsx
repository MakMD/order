import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ContactForm.module.css";
import { supabase } from "../lib/supabaseClient";
import Button from "./UI/Button/Button";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  service: "general",
  message: "",
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormMessage({
        text: t("contact_form_validation_warning"),
        type: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    setFormMessage({ text: "", type: "" });

    const { error } = await supabase.from("contact_requests").insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        service: formData.service,
        message: formData.message,
      },
    ]);

    if (error) {
      setFormMessage({
        text: t("contact_form_error_message", { error: error.message }),
        type: "error",
      });
    } else {
      setFormMessage({
        text: t("contact_form_success_message"),
        type: "success",
      });
      setFormData(initialFormData);
      // Очищуємо query-параметр після успішної відправки
      if (searchParams.get("service")) {
        setSearchParams({});
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{t("contact_form_title")}</h2>

      {formMessage.text && (
        <div className={`${styles.statusMessage} ${styles[formMessage.type]}`}>
          {formMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              {t("contact_form_name_label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.formControl}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t("contact_form_email_label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.formControl}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="phone" className={styles.label}>
              {t("contact_form_phone_label")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.formControl}
            />
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="service" className={styles.label}>
              {t("contact_form_service_label")}
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.formControl}
            >
              <option value="general">
                {t("contact_form_service_general")}
              </option>
              <option value="web-development">
                {t("contact_form_service_dev")}
              </option>
              <option value="modernization">
                {t("contact_form_service_modernization")}
              </option>
              <option value="maintenance">
                {t("contact_form_service_maintenance")}
              </option>
              <option value="other">{t("contact_form_service_other")}</option>
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message" className={styles.label}>
              {t("contact_form_message_label")}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.formControl}
            ></textarea>
          </div>

          <div className={styles.submitButtonContainer}>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting
                ? t("contact_form_submitting_btn")
                : t("contact_form_submit_btn")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
