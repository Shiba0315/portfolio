<<<<<<< HEAD
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kotaro Shiba - Portfolio',
  description: 'Computer Science student and web developer passionate about creating innovative solutions.',
  keywords: 'Kotaro Shiba, portfolio, web developer, computer science, React, Next.js',
  author: 'Kotaro Shiba',
=======
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
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Kotaro Shiba
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link 
                  href="/" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  About
                </Link>
                <Link 
                  href="/projects" 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  Projects
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Kotaro Shiba. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Shiba0315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:kotaro.shiba@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
=======
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
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
      </body>
    </html>
  );
}
