import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/UI/Button/Button";

// Дані, взяті з оригінального HTML
const servicesData = [
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    title: "Розробка веб-сайтів",
    description:
      "Ми створюємо адаптивні, швидкі та функціональні сайти, які ефективно представляють ваш бізнес в мережі. Від простих лендінгів до складних корпоративних порталів.",
    features: [
      "Розробка на сучасних CMS та фреймворках",
      "Адаптивний дизайн для всіх пристроїв",
      "Оптимізація швидкості завантаження",
      "Інтеграція зі сторонніми сервісами (CRM, аналітика)",
    ],
    link: "/contact?service=web-development",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        ></path>
      </svg>
    ),
    title: "UI/UX Дизайн",
    description:
      "Проєктуємо інтерфейси, які є не тільки красивими, але й зручними для користувача. Наша мета — забезпечити позитивний досвід взаємодії з вашим продуктом.",
    features: [
      "Дослідження цільової аудиторії",
      "Створення прототипів та вайрфреймів",
      "Розробка дизайн-систем",
      "Тестування юзабіліті",
    ],
    link: "/contact?service=ui-ux-design",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
    title: "E-commerce Рішення",
    description:
      "Розробляємо повнофункціональні інтернет-магазини, які допомагають продавати. Інтегруємо платіжні системи, керування складом та доставкою.",
    features: [
      "Розробка на Shopify, WooCommerce",
      "Інтеграція онлайн-оплати та доставки",
      "Системи управління каталогом",
      "Особистий кабінет покупця",
    ],
    link: "/contact?service=e-commerce",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    ),
    title: "SEO-оптимізація",
    description:
      "Підвищуємо позиції вашого сайту в пошукових системах Google, щоб залучити більше органічного трафіку та потенційних клієнтів.",
    features: [
      "Технічний аудит сайту",
      "Збір семантичного ядра",
      "Внутрішня та зовнішня оптимізація",
      "Аналітика та звітність",
    ],
    link: "/contact?service=seo",
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.pageTitle}>Наші Послуги</h1>
            <p className={styles.pageSubtitle}>
              Ми пропонуємо повний спектр послуг для створення та підтримки
              вашої присутності в інтернеті.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Request CTA Section */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.customCta}>
            <h3 className={styles.ctaTitle}>Не знайшли потрібну послугу?</h3>
            <p className={styles.ctaSubtitle}>
              Ми готові до індивідуальних завдань. Зв'яжіться з нами, щоб
              обговорити ваш унікальний проєкт.
            </p>
            <Link to="/contact?service=other">
              <Button variant="secondary">Обговорити проєкт</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
