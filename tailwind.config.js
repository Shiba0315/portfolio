/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
=======
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
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
} 
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
