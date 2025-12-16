import React, { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    const savedTheme = localStorage.getItem("theme") || "light";
    // Apply it immediately on load
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", savedTheme);
      document.body.className = savedTheme;
    }
    return savedTheme;
  });

  useEffect(() => {
    // Apply theme to body and html
    document.body.className = theme;
    document.documentElement.setAttribute("data-theme", theme);
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className={styles.themeToggle} onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}