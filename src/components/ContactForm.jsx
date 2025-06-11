import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./ContactForm.module.css";
import { supabase } from "../lib/supabaseClient";
import Button from "./UI/Button/Button";

const initialFormData = {
  name: "",
  contact: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormData((prev) => ({
        ...prev,
        message: `Доброго дня, мене цікавить послуга: ${service}. `,
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) {
      setError("Будь ласка, заповніть всі обовʼязкові поля.");
      return;
    }
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const { error: insertError } = await supabase
      .from("contact_requests")
      .insert([
        {
          name: formData.name,
          email: formData.contact.includes("@") ? formData.contact : null,
          phone: !formData.contact.includes("@") ? formData.contact : null,
          message: formData.message,
        },
      ]);

    setIsSubmitting(false);
    if (insertError) {
      setError(`Помилка відправки: ${insertError.message}`);
    } else {
      setSuccess("Дякую! Ваша заявка успішно відправлена.");
      setFormData(initialFormData);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formTitle}>Напишіть мені</h3>
      {error && <p className={`${styles.message} ${styles.error}`}>{error}</p>}
      {success && (
        <p className={`${styles.message} ${styles.success}`}>{success}</p>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Ваше ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact" className={styles.label}>
            Ваш Email або Телефон
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className={styles.input}
            placeholder="Як з вами зв'язатися?"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Коротко опишіть ваш проєкт
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
          ></textarea>
        </div>
        <div>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Відправка..."
              : "Отримати безкоштовну консультацію"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
