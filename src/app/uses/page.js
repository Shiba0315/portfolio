'use client';

import { useEffect } from 'react';

export default function UsesPage() {
  useEffect(() => {
    // Set up intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    // Apply observer to all elements with initial opacity of 0
    const animatedElements = document.querySelectorAll('[style*="opacity:0"]');
    animatedElements.forEach((el) => observer.observe(el));

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What I Use
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive list of the tools, software, and hardware I use daily for development, design, and productivity.
          </p>
        </div>

        {/* Hardware Section */}
        <section className="mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Hardware</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">MacBook Pro 14" M1 Pro</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">My primary development machine with 16GB RAM and 512GB SSD. The M1 chip provides incredible performance for all my development tasks.</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded-full">Primary</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Dell UltraSharp 27" 4K</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">External monitor for additional screen real estate. Perfect for code reviews and design work.</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">External</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Keychron K2 Mechanical Keyboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Wireless mechanical keyboard with brown switches. Great tactile feedback for long coding sessions.</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">Input</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Logitech MX Master 3</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Ergonomic wireless mouse with customizable buttons. Perfect for productivity and design work.</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">Input</span>
              </div>
            </div>
          </div>
        </section>

        {/* Software Section */}
        <section className="mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Development Software</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Visual Studio Code</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">My primary code editor with extensions like Prettier, ESLint, and GitLens for enhanced productivity.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">Editor</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Version control and collaboration platform. I use GitHub for all my projects and open-source contributions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm">Version Control</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Postman</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">API testing and development tool. Essential for backend development and API integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-sm">API Testing</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Docker</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Containerization platform for consistent development environments and deployment.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Containerization</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">DevOps</span>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools Section */}
        <section className="mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Design Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Figma</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Primary design tool for UI/UX design, prototyping, and collaboration with design teams.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm">UI/UX</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Adobe Creative Suite</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Photoshop and Illustrator for advanced image editing and vector graphics creation.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded-full text-sm">Graphics</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">Professional</span>
              </div>
            </div>
          </div>
        </section>

        {/* Productivity Tools Section */}
        <section className="mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Productivity Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Notion</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">All-in-one workspace for notes, project management, and knowledge base organization.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">Notes</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Slack</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Team communication and collaboration platform for project coordination.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm">Communication</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Trello</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Kanban board for task management and project tracking.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Project Management</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">Agile</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Spotify</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Music streaming for focus and productivity during coding sessions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm">Music</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm">Focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Extensions Section */}
        <section className="mb-12 sm:mb-16" style={{ opacity: 1, transform: 'translateY(0)' }}>
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Browser Extensions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">React Developer Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Essential for debugging React applications and inspecting component state.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Development</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-sm">Essential</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">Dark Reader</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Automatically applies dark mode to websites that don't have it built-in.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm">Accessibility</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-sm">UX</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 