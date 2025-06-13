import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ text: "", type: "" });
  const [searchParams] = useSearchParams();

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
        text: "Будь ласка, заповніть усі обов'язкові поля.",
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
        text: `Сталася помилка: ${error.message}`,
        type: "error",
      });
    } else {
      setFormMessage({
        text: "Дякуємо! Ваше повідомлення успішно надіслано.",
        type: "success",
      });
      setFormData(initialFormData);
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Форма замовлення</h2>

      {formMessage.text && (
        <div className={`${styles.statusMessage} ${styles[formMessage.type]}`}>
          {formMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Ваше ім'я *
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
              Email *
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
              Телефон (необов'язково)
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
              Послуга, що цікавить
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.formControl}
            >
              <option value="general">Загальне питання</option>
              <option value="web-development">Розробка веб-сайтів</option>
              <option value="modernization">
                Модернізація та перехід на React
              </option>
              <option value="maintenance">Підтримка та обслуговування</option>
              <option value="other">Інше</option>
            </select>
          </div>

          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label htmlFor="message" className={styles.label}>
              Ваше повідомлення *
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
              {isSubmitting ? "Надсилання..." : "Надіслати"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
