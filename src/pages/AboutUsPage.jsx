import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUsPage.module.css";
import Button from "../components/UI/Button/Button";

// Іконки для наших компетенцій
const SpecializationIcon = ({ children }) => (
  <div className={styles.specIcon}>{children}</div>
);

const AboutUsPage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Секція 1: Hero */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Про My-Dev</h1>
          <p className={styles.mainSubtitle}>
            Ми — ваш надійний партнер у світі цифрових технологій. Ми не просто
            пишемо код, ми створюємо рішення, що працюють на ваш бізнес.
          </p>
        </div>
      </section>

      {/* Секція 2: Наша філософія */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <h3>Прозорість</h3>
              <p>
                Ми будуємо роботу на чесності та відкритому діалозі. Ви завжди
                знаєте, на якому етапі знаходиться ваш проєкт.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Якість</h3>
              <p>
                Чистий, ефективний та масштабований код — наш стандарт. Ми
                створюємо продукти, які легко підтримувати та розвивати.
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <h3>Партнерство</h3>
              <p>
                Ми занурюємось у ваші бізнес-цілі, щоб запропонувати найкраще
                технологічне рішення для їх досягнення.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція 3: Спеціалізація */}
      <section className={`${styles.section} ${styles.specSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>На чому ми спеціалізуємось</h2>
          </div>
          <div className={styles.specGrid}>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2.5a9.5,9.5 0 1,0 9.5,9.5a9.5,9.5 0 0,0 -9.5,-9.5m0,1.46a8,8 0 1,1 -8,8a8,8 0 0,1 8,-8m-4.66,4.31l-1.1,1.9l2.35,1.35l-2.35,1.36l1.1,1.9l4.7,-2.72l-4.7,-2.79m5.32,0l4.7,2.79l-4.7,2.72l1.1,1.9l2.35,-1.36l-2.35,-1.35l1.1,-1.9z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>React & Vite</h4>
              <p>
                Створюємо блискавично швидкі та інтерактивні інтерфейси на
                найсучаснішому стеку.
              </p>
            </div>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.35,10.04a7.5,7.5 0 0,0 -14,-2a5.5,5.5 0 0,0 -0.5,11h14.5a4.5,4.5 0 0,0 0,-9z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>Supabase</h4>
              <p>
                Використовуємо Supabase як надійний та масштабований бекенд, що
                прискорює розробку.
              </p>
            </div>
            <div className={styles.specCard}>
              <SpecializationIcon>
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4.1,3.5l1.4,1.4c3.1,-3.1 8.2,-3.1 11.3,0c1.2,1.2 1.9,2.7 2.1,4.3l1.9,0c-0.2,-2.3 -1.2,-4.5 -2.8,-6.1c-4.2,-4.2 -11,-4.2 -15.2,0l1.3,1.4m15.8,15.6l-1.4,-1.4c-3.1,3.1 -8.2,3.1 -11.3,0c-1.2,-1.2 -1.9,-2.7 -2.1,-4.3l-1.9,0c0.2,2.3 1.2,4.5 2.8,6.1c4.2,4.2 11,4.2 15.2,0l-1.3,-1.4z M17,12c0,2.8 -2.2,5 -5,5s-5,-2.2 -5,-5s2.2,-5 5,-5s5,2.2 5,5z"
                  ></path>
                </svg>
              </SpecializationIcon>
              <h4>UI/UX & Адаптивність</h4>
              <p>
                Приділяємо максимальну увагу дизайну та досвіду користувача на
                всіх пристроях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секція 4: CTA */}
      <section className={styles.section}>
        <div className={styles.container} style={{ textAlign: "center" }}>
          <h2 className={styles.sectionTitle}>
            Давайте створимо щось видатне разом
          </h2>
          <p className={styles.sectionSubtitle}>
            Зв'яжіться з нами, щоб обговорити ваш наступний проєкт.
          </p>
          <Link to="/contact">
            <Button>Розпочати співпрацю</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
