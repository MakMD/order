import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import IconSun from "../../icons/IconSun";
import IconMoon from "../../icons/IconMoon";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ThemeSwitcher;
