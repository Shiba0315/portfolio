"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("ThemeProvider: Initializing theme system...");

    // Retrieve theme from localStorage or use system preference as fallback
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    console.log("ThemeProvider: Setting initial theme to:", initialTheme);
    setTheme(initialTheme);

    // Apply the theme class to the document root element
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("ThemeProvider: Dark theme applied to document");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("ThemeProvider: Light theme applied to document");
    }

    setMounted(true);
    console.log("ThemeProvider: Component mounted successfully");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("ThemeProvider: Switching theme from", theme, "to", newTheme);

    setTheme(newTheme);

    // Persist theme preference in localStorage
    localStorage.setItem("theme", newTheme);

    // Update document class to reflect new theme
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Return consistent initial state to prevent hydration mismatch
  const value = {
    isDarkMode: mounted ? theme === "dark" : false,
    toggleTheme,
    mounted,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
