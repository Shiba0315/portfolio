<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">KS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Kotaro Shiba
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Computer Science Student & Web Developer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions and learning new technologies. 
              Currently pursuing Computer Science at Ensign College.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              About Me
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, HTML, CSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, APIs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tailwind CSS, Responsive</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Git, VS Code, GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Shiba0315" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:kotaro.shiba@example.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 py-8 sm:py-12">
        <div className="lg:col-span-2">
          <header className="flex flex-col sm:flex-row items-start sm:items-center text-left mb-6 gap-4 sm:gap-6">
            <Image
              src="/kotaro-shiba.png"
              alt="Kotaro Shiba"
              width={120}
              height={120}
              className="rounded-full object-cover mb-4 sm:mb-0 border-4 border-white-500 hover:scale-105 transition-transform duration-300 w-24 h-24 sm:w-32 sm:h-32 lg:w-28 lg:h-28"
            />
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 dark:text-gray-300">Kotaro Shiba</h2>
              <h3 className="text-lg sm:text-xl mt-2 font-semibold text-gray-700 dark:text-gray-200">Software Engineer | Web Developer</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-3 dark:text-gray-300">
                Hi! I am a passionate software engineer who loves creating impactful and user-friendly web applications.
              </p>
              <div className="flex space-x-3 sm:space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/kotaro-shiba/" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin-logo.png" alt="LinkedIn" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
                </a>
                <a href="http://instagram.com/sh.iba6294/" target="_blank" rel="noopener noreferrer">
                  <Image src="/instagram-logo.png" alt="Instagram" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/Shiba0315" target="_blank" rel="noopener noreferrer">
                  <Image src="/github-logo.png" alt="GitHub" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </header>

          <div className="mb-6 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">December 26, 2023</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">Building Amazing Web Apps with Next.js</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              Dive deep into the world of Next.js and learn how to create fast, SEO-friendly, and scalable web applications.
            </p>
            <a href="#" className="text-teal-500 dark:text-teal-400 mt-2 inline-block hover:underline text-sm sm:text-base">Read article →</a>
          </div>

          <div className="mb-6 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">December 17, 2023</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-1 text-gray-800 dark:text-gray-200">The Future of Web Development</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              Exploring the latest trends and technologies shaping the future of web development.
            </p>
            <a href="#" className="text-teal-500 dark:text-teal-400 mt-2 inline-block hover:underline text-sm sm:text-base">Read article →</a>
          </div>
        </div>

        <aside className="space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">Stay up to date</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 dark:text-gray-300">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 text-sm"
              />
              <button className="px-4 py-2 bg-teal-500 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-teal-600 transition-colors text-sm">
                Join
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Work Experience</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center space-x-3 sm:space-x-4">
                <Image 
                  src="/slack-logo.png" 
                  alt="Slack" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Slack</h5>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2024 - Present</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 sm:space-x-4">
                <Image 
                  src="/spotify-logo.png" 
                  alt="Spotify" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Spotify</h5>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Web Developer</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2022 - 2023</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 sm:space-x-4">
                <Image 
                  src="/audible-logo.png" 
                  alt="Audible" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Audible</h5>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Frontend Developer</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2021 - 2022</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 sm:space-x-4">
                <Image 
                  src="/microsoft-logo.png" 
                  alt="Microsoft" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">Microsoft</h5>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intern Developer</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">2020 - 2021</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Skills</h4>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">HTML</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-red-500 h-1.5 sm:h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">CSS</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-blue-500 h-1.5 sm:h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-yellow-500 h-1.5 sm:h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">React</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-teal-500 h-1.5 sm:h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Next.js</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <div className="bg-purple-500 h-1.5 sm:h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
  );
}
