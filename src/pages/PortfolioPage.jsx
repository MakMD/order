import React from "react";
import styles from "./PortfolioPage.module.css";
import PortfolioCard from "../components/PortfolioCard";

// Дані-заглушки для портфоліо
const portfolioData = [
  {
    image:
      "https://placehold.co/600x400/3b82f6/ffffff?text=E-commerce+Platform",
    title: 'Платформа для інтернет-магазину "Moderno"',
    description:
      "Розробка сучасного e-commerce сайту з особистим кабінетом, інтеграцією платіжних систем та системою управління товарами.",
    tags: ["React", "Supabase", "Node.js", "Stripe API"],
    link: "#",
  },
  {
    image: "https://placehold.co/600x400/10b981/ffffff?text=Corporate+Website",
    title: 'Корпоративний сайт для "Fintech Solutions"',
    description:
      "Створення іміджевого сайту для фінансової компанії з акцентом на безпеку, швидкість та унікальний UI/UX дизайн.",
    tags: ["Vite", "React", "CSS Modules", "Figma"],
    link: "#",
  },
  {
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Landing+Page",
    title: 'Лендінг для мобільного додатку "Taskify"',
    description:
      "Розробка яскравої та конверсійної посадкової сторінки для просування нового мобільного додатку для управління завданнями.",
    tags: ["HTML5", "CSS3", "JavaScript", "Анімації"],
    link: "#",
  },
];

const PortfolioPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h1 className={styles.pageTitle}>Наше Портфоліо</h1>
            <p className={styles.pageSubtitle}>
              Ми пишаємося кожним проєктом, який ми створюємо. Ось кілька
              прикладів наших робіт, що демонструють нашу експертизу та підхід
              до вирішення завдань клієнтів.
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {portfolioData.map((project, index) => (
              <PortfolioCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
