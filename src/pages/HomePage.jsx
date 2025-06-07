import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Button from "../components/UI/Button/Button";
import FeatureCard from "../components/FeatureCard";
import ServiceOverviewCard from "../components/ServiceOverviewCard";

// Дані для секції "Чому обирають нас?"
const featuresData = [
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6M5 21v-5a2 2 0 012-2h10a2 2 0 012 2v5m-14 0h14"
        ></path>
      </svg>
    ),
    title: "Комплексний підхід",
    description:
      "Ми супроводжуємо ваш проєкт на всіх етапах: від аналізу та дизайну до розробки, тестування й підтримки.",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    ),
    title: "Сучасні технології",
    description:
      "Ми використовуємо передові фреймворки та інструменти для створення швидких, безпечних та масштабованих рішень.",
  },
  {
    icon: (
      <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
    title: "Підтримка та розвиток",
    description:
      "Після запуску ми не залишаємо вас наодинці. Пропонуємо технічну підтримку та плани розвитку вашого продукту.",
  },
];

// Дані для секції "Наші ключові послуги"
const servicesOverviewData = [
  {
    title: "Веб-розробка",
    description:
      "Створення корпоративних сайтів, лендінгів та складних веб-додатків.",
  },
  {
    title: "UI/UX Дизайн",
    description:
      "Проєктування інтуїтивно зрозумілих та естетичних інтерфейсів.",
  },
  {
    title: "E-commerce",
    description: "Розробка інтернет-магазинів з інтеграцією платіжних систем.",
  },
  {
    title: "SEO Оптимізація",
    description: "Покращення видимості вашого сайту в пошукових системах.",
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Створюємо цифрові рішення, що надихають
          </h1>
          <p className={styles.heroSubtitle}>
            Від ідеї до запуску: ми перетворюємо ваші бізнес-цілі на ефективні
            веб-сайти та додатки.
          </p>
          <Link to="/services">
            <Button>Дізнатися більше про послуги</Button>
          </Link>
        </div>
      </section>

      {/* Features Section - НОВА СЕКЦІЯ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Чому обирають нас?</h2>
            <p className={styles.sectionSubtitle}>
              Ми пропонуємо більше, ніж просто код.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section - НОВА СЕКЦІЯ */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Наші ключові послуги</h2>
            <p className={styles.sectionSubtitle}>
              Рішення для будь-яких бізнес-завдань.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {servicesOverviewData.map((service, index) => (
              <ServiceOverviewCard key={index} {...service} />
            ))}
          </div>
          <div className={styles.viewAllLinkWrapper}>
            <Link to="/services" className={styles.viewAllLink}>
              Переглянути всі послуги &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Готові розпочати ваш проєкт?</h2>
          <p className={styles.ctaSubtitle}>
            Давайте обговоримо ваші ідеї та знайдемо найкраще рішення для вашого
            бізнесу.
          </p>
          <Link to="/contact">
            <Button
              variant="secondary"
              style={{ backgroundColor: "white", color: "#3b82f6" }}
            >
              Зв'язатися з нами
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
