import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Script from "next/script";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = theme || systemTheme;
                  
                  if (initialTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.log('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200`} suppressHydrationWarning>
        <ThemeProvider>
          <nav className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 shadow-md bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 gap-3 sm:gap-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>
            <Navigation />
            <ThemeToggle />
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t border-gray-200 dark:border-gray-700 mt-8 py-4 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
            <nav className="mb-2 flex flex-wrap justify-center gap-2 sm:gap-4">
              <Link href="/" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">About</Link>
              <Link href="/projects" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Projects</Link>
              <Link href="/uses" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Uses</Link>
            </nav>
            <p>© 2025 Kotaro Shiba. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
