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
    <div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}
      >
        Форма замовлення
      </h2>

      {formMessage.text && (
        <div
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "0.375rem",
            color: formMessage.type === "success" ? "#166534" : "#991b1b",
            backgroundColor:
              formMessage.type === "success" ? "#dcfce7" : "#fee2e2",
          }}
        >
          {formMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Поля форми name, email, phone */}
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="service"
            style={{ marginBottom: "0.5rem", display: "block" }}
          >
            Послуга, що цікавить
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
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
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="message"
            style={{ marginBottom: "0.5rem", display: "block" }}
          >
            Ваше повідомлення
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          ></textarea>
        </div>
        <div>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Надсилання..." : "Надіслати"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
