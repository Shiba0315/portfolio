/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define which files to scan for Tailwind classes
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Enable dark mode using class strategy
  darkMode: 'class',
  theme: {
    extend: {
      // Custom animations for enhanced user experience
      animation: {
        'fade-in': 'fadeInUp 0.6s ease-out forwards',
      },
      // Keyframe definitions for custom animations
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} 