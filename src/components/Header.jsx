import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";

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
      <div className={`container ${styles.navContainer}`}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            YourCreativeDev
          </Link>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <div className={styles.mobileMenuButtonContainer}>
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={styles.mobileMenuButton}
              aria-label="Toggle menu"
            >
              {/* Іконка-бургер */}
              <svg className={styles.burgerIcon} viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
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
            <Link to="/contact" onClick={closeMenu}>
              <Button>Замовити</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
