import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";
import IconSun from "../../icons/IconSun";
import IconMoon from "../../icons/IconMoon";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const nextTheme = theme === "light" ? "dark" : "light";
  const themeName =
    nextTheme === "dark" ? t("theme_switcher_dark") : t("theme_switcher_light");

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={t("theme_switcher_label", { theme: themeName })}
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ThemeSwitcher;
