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
  );
}
