import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";
import LanguageSwitcher from "./UI/LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./UI/ThemeSwitcher/ThemeSwitcher"; // Імпортуємо новий компонент

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // ... (решта логіки без змін) ...
  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  // ...

  const navLinks = [
    { to: "/", text: t("nav_home") },
    { to: "/services", text: t("nav_services") },
    { to: "/case-studies", text: t("nav_case_studies") },
    { to: "/about", text: t("nav_about") },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logoLink}>
            <img
              src="/logo.svg"
              alt="YourBrand Logo"
              className={styles.logoImage}
            />
          </Link>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ""}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <Link to="/contact">
              <Button>{t("nav_contact")}</Button>
            </Link>
            <ThemeSwitcher /> {/* Додаємо перемикач теми */}
            <LanguageSwitcher />
          </div>

          <div className={styles.mobileMenuButtonContainer}>
            {/* ... (кнопка мобільного меню без змін) ... */}
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className={styles.mobileMenu}>
            {/* ... (мобільне меню) ... */}
            <div className={styles.mobileMenuBottom}>
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
