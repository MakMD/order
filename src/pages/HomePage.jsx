import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Button from "../components/UI/Button/Button";

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

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Чому обирають нас?</h2>
            <p className={styles.sectionSubtitle}>
              Ми пропонуємо більше, ніж просто код.
            </p>
          </div>
          <div className={styles.featuresGrid}>{/* Feature Cards тут */}</div>
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
