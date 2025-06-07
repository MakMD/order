import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";
import logoImage from "../assets/logo.png"; // <-- Змінено шлях

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { to: "/", text: "Головна" },
    { to: "/services", text: "Послуги" },
    { to: "/portfolio", text: "Портфоліо" },
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
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileMenuButton}
              aria-label="Toggle menu"
            >
              <svg className={styles.burgerIcon} viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
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
