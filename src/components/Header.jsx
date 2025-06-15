import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";
import LanguageSwitcher from "./UI/LanguageSwitcher/LanguageSwitcher";
import ThemeSwitcher from "./UI/ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Focus management for accessibility
  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstFocusableElement =
        mobileMenuRef.current?.querySelector("a, button");
      firstFocusableElement?.focus();
    } else {
      mobileMenuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

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
          <Link
            to="/"
            className={styles.logoLink}
            onClick={isMobileMenuOpen ? closeMenu : undefined}
          >
            <img
              src="/logo.svg"
              alt={t("logo_alt_text")}
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Navigation */}
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
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButtonContainer}>
            <button
              ref={mobileMenuButtonRef}
              onClick={toggleMenu}
              className={styles.mobileMenuButton}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className={styles.burgerIcon} viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" /> // Close icon (X)
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" /> // Burger icon
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className={styles.mobileMenu}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className={styles.mobileMenuContactLink}
            >
              <Button>{t("nav_contact")}</Button>
            </Link>
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
