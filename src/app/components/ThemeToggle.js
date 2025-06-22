"use client";

import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme, mounted } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = () => {
    if (mounted && isClient) {
      console.log(
        "ThemeToggle: Switching theme from:",
        isDarkMode ? "dark" : "light",
      );
      toggleTheme();
    }
  };

  // Display loading state while component is mounting to prevent hydration issues
  if (!mounted || !isClient) {
    return (
      <button
        className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-md animate-pulse"
        aria-label="Loading theme"
        disabled
      >
        <span className="text-gray-400 text-lg">⏳</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <span role="img" aria-label="Sun" className="text-yellow-500 text-lg">
          ☀️
        </span>
      ) : (
        <span role="img" aria-label="Moon" className="text-gray-700 text-lg">
          🌙
        </span>
      )}
    </button>
  );
}
