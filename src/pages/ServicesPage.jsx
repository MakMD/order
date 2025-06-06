import React from "react";
import { Link } from "react-router-dom";

// Дані для карток послуг
const services = [
  {
    title: "Розробка веб-сайтів",
    description: "Ми створюємо адаптивні, швидкі та функціональні сайти...",
    features: ["Розробка на сучасних CMS та фреймворках", "..."],
    link: "/contact?service=web-development",
  },
  // ... інші послуги
];

const ServicesPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Наші Послуги</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ми пропонуємо повний спектр послуг для створення та підтримки вашої
            присутності в інтернеті.
          </p>
        </div>
        <div className="space-y-12">
          {/* Мапінг даних для рендеру карток послуг */}
          {/* ... JSX код, аналогічний до services.html ... */}
          {/* Приклад посилання для замовлення */}
          <Link
            to="/contact?service=web-development"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 smooth-transition"
          >
            Замовити розробку
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
