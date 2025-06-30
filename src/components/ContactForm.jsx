import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
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

// Асинхронна функція для відправки даних до Supabase
async function submitContactRequest(formData) {
  const { data, error } = await supabase.from("contact_requests").insert([
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      service: formData.service,
      message: formData.message,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormData);
  const [validationMessage, setValidationMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: submitContactRequest,
    onSuccess: () => {
      setFormData(initialFormData);
      if (searchParams.get("service")) {
        setSearchParams({});
      }
    },
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationMessage("");
    if (!formData.name || !formData.email || !formData.message) {
      setValidationMessage(t("contact_form_validation_warning"));
      return;
    }
    mutate(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>{t("contact_form_title")}</h2>

      {validationMessage && (
        <div className={`${styles.statusMessage} ${styles.warning}`}>
          {validationMessage}
        </div>
      )}
      {isSuccess && (
        <div className={`${styles.statusMessage} ${styles.success}`}>
          {t("contact_form_success_message")}
        </div>
      )}
      {isError && (
        <div className={`${styles.statusMessage} ${styles.error}`}>
          {t("contact_form_error_message", { error: error.message })}
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
            <Button type="submit" variant="primary" disabled={isPending}>
              {isPending
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
