import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
// import { AppContext } from '../context/AppContext'; // Припустимо, що є такий контекст

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  service: "general",
  message: "",
};

const ContactForm = () => {
  // const { addActivity, toast } = useContext(AppContext); // Припустимо
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      // toast({ title: "Помилка валідації", description: "Будь ласка, заповніть усі обов'язкові поля.", status: 'warning' });
      console.warn("Validation error: Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);
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
      //   toast({ title: "Помилка відправки", description: `Сталася помилка: ${error.message}`, status: 'error' });
      //   addActivity(`Failed to submit contact form: ${error.message}`);
      console.error("Submission error:", error.message);
    } else {
      //   toast({ title: "Успішно надіслано!", description: "Дякуємо! Ми зв'яжемося з вами незабаром.", status: 'success' });
      //   addActivity(`Contact form successfully submitted by ${formData.email}`);
      console.log("Successfully submitted!");
      setFormData(initialFormData); // Скидання форми
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Форма замовлення</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* ... JSX для полів форми, аналогічний до contact.html ... */}
        {/* Приклад поля input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Ваше ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        {/* ... інші поля ... */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 smooth-transition disabled:opacity-50"
          >
            {isSubmitting ? "Надсилання..." : "Надіслати"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
