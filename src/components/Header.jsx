import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";
import logoImage from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Ефект для керування фокусом при закритті меню
  useEffect(() => {
    if (!isMobileMenuOpen) {
      mobileMenuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  // Ефект для фокусування на першому елементі при відкритті меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      const firstFocusableElement =
        mobileMenuRef.current?.querySelector("a, button");
      firstFocusableElement?.focus();
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: "/", text: "Головна" },
    { to: "/services", text: "Послуги" },
    { to: "/about", text: "Про нас" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" onClick={closeMenu}>
            <img
              src={logoImage}
              alt="Логотип My-Dev"
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
              <Button>Замовити</Button>
            </Link>
          </div>

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
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

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
              <Button>Замовити</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
