import React from "react";
import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";
import ServiceCard from "../components/ServiceCard";
import Button from "../components/UI/Button/Button";

// --- Дані для карток, згруповані за секціями ---

const coreDevelopmentServices = [
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m6 0l-3 3m-3 12l3-3m-6 0l3-3m-4-3a2 2 0 114 0 2 2 0 01-4 0z"
        ></path>
      </svg>
    ),
    title: "Комплексна розробка з нуля",
    description:
      "Ми створюємо унікальні сайти та веб-додатки, що повністю відповідають вашим бізнес-цілям, незалежно від сфери діяльності та складності проєкту.",
    features: [
      "Аналіз вимог та проєктування архітектури",
      "Розробка фронтенду та бекенду",
      "Тестування та розгортання",
      "Масштабована та надійна структура",
    ],
    link: "/contact?service=custom-development",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h5M20 20v-5h-5M4 20L20 4"
        ></path>
      </svg>
    ),
    title: "Модернізація та редизайн",
    description:
      "Вдихнемо нове життя у ваш існуючий проєкт. Ми покращуємо застарілі сайти, роблячи їх сучасними, швидкими, адаптивними та функціональними.",
    features: [
      "Аудит існуючого коду та дизайну",
      "Редизайн та покращення UX",
      "Адаптація під мобільні пристрої",
      "Додавання нового функціоналу",
    ],
    link: "/contact?service=modernization",
  },
];

const businessSolutions = [
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
      "Проєктуємо інтуїтивно зрозумілі та візуально привабливі інтерфейси, які забезпечують позитивний досвід взаємодії та підвищують конверсію.",
    features: [
      "Дослідження користувачів",
      "Створення інтерактивних прототипів",
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
      "Інтеграція онлайн-оплати",
      "Системи управління каталогом",
      "Особистий кабінет покупця",
    ],
    link: "/contact?service=e-commerce",
  },
];

const growthServices = [
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
    title: "Підтримка та обслуговування",
    description:
      "Забезпечуємо стабільну та безпечну роботу вашого проєкту після запуску. Пропонуємо пакети підтримки для регулярних оновлень та моніторингу.",
    features: [
      "Регулярне резервне копіювання",
      "Оновлення CMS та плагінів",
      "Моніторинг безпеки 24/7",
      "Консультаційна підтримка",
    ],
    link: "/contact?service=maintenance",
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
    title: "SEO та аналітика",
    description:
      "Допомагаємо вашому сайту займати вищі позиції в пошуку та розуміти поведінку відвідувачів для підвищення ефективності та досягнення бізнес-цілей.",
    features: [
      "Технічна SEO-оптимізація",
      "Аналіз трафіку та конверсій",
      "Налаштування Google Analytics",
      "Звітність та рекомендації",
    ],
    link: "/contact?service=seo-analytics",
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* --- Секція 1: Ключові напрямки --- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.pageTitle}>Наші Послуги</h1>
            <p className={styles.pageSubtitle}>
              Ми пропонуємо комплексні рішення для будь-яких завдань — від
              розробки нових проєктів до модернізації існуючих.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {coreDevelopmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Секція 2: Спеціалізовані рішення --- */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>
              Спеціалізовані рішення для бізнесу
            </h2>
          </div>
          <div className={styles.servicesGrid}>
            {businessSolutions.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Секція 3: Підтримка та розвиток --- */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Підтримка та розвиток</h2>
          </div>
          <div className={styles.servicesGrid}>
            {growthServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
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
