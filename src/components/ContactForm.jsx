import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import Button from "./UI/Button/Button";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  service: "general",
  message: "",
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const fieldStyles = {
  display: "flex",
  flexDirection: "column",
};

const labelStyles = {
  marginBottom: "0.5rem",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "#374151",
};

const inputStyles = {
  padding: "0.5rem 0.75rem",
  border: "1px solid #d1d5db",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  outline: "none",
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
    // addActivity(`Attempting to submit contact form for ${formData.email}`);

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
      // addActivity(`Failed to submit contact form: ${error.message}`);
    } else {
      setFormMessage({
        text: "Дякуємо! Ваше повідомлення успішно надіслано.",
        type: "success",
      });
      // addActivity(`Contact form successfully submitted by ${formData.email}`);
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

      <form onSubmit={handleSubmit} noValidate style={formStyles}>
        <div style={fieldStyles}>
          <label htmlFor="name" style={labelStyles}>
            Ваше ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>
        <div style={fieldStyles}>
          <label htmlFor="email" style={labelStyles}>
            Ваш Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>
        <div style={fieldStyles}>
          <label htmlFor="phone" style={labelStyles}>
            Номер телефону (необов'язково)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyles}
          />
        </div>
        <div style={fieldStyles}>
          <label htmlFor="service" style={labelStyles}>
            Послуга, що цікавить
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            style={inputStyles}
          >
            <option value="general">Загальне питання</option>
            <option value="web-development">Розробка веб-сайтів</option>
            <option value="ui-ux-design">UI/UX Дизайн</option>
            <option value="e-commerce">E-commerce Рішення</option>
            <option value="seo">SEO-оптимізація</option>
            <option value="other">Інше</option>
          </select>
        </div>
        <div style={fieldStyles}>
          <label htmlFor="message" style={labelStyles}>
            Ваше повідомлення
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            style={inputStyles}
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
