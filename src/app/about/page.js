<<<<<<< HEAD
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know Kotaro Shiba
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-48 h-48 mx-auto md:mx-0 mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">KS</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Kotaro Shiba
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  I&apos;m a passionate Computer Science student at Ensign College, dedicated to learning and creating innovative web solutions. 
                  My journey in technology began with a curiosity about how things work on the internet, and it has evolved into a deep 
                  passion for web development and software engineering.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Shiba0315" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href="mailto:kotaro.shiba@example.com" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Ensign College
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  2023 - Present
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Currently pursuing a degree in Computer Science with focus on web development, 
                  algorithms, and software engineering principles.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Interests
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Frontend Development (React, Next.js, HTML, CSS)</li>
                  <li>• Backend Development (Node.js, Express)</li>
                  <li>• Database Management (SQL, MongoDB)</li>
                  <li>• Version Control (Git, GitHub)</li>
                  <li>• Responsive Web Design</li>
                  <li>• API Development and Integration</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Interests
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Web Development and Design</li>
                  <li>• Artificial Intelligence and Machine Learning</li>
                  <li>• Open Source Projects</li>
                  <li>• Problem Solving and Algorithms</li>
                  <li>• User Experience Design</li>
                  <li>• Emerging Technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Goals & Aspirations
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Master Full-Stack Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Develop expertise in both frontend and backend technologies to create complete web applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Contribute to Open Source
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Give back to the developer community by contributing to meaningful open source projects.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Build Innovative Solutions
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Create applications that solve real-world problems and improve people&apos;s lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
=======
import Image from "next/image";

export default function About() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-12 sm:space-y-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Hello! My name is Kotaro Shiba, and I&apos;m an international student from Japan currently studying Computer Science at Ensign College in Utah, USA.
            💻</h1>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            Ever since I was young, I&apos;ve been passionate about <span className="font-bold text-green-600 dark:text-green-400">technology and problem-solving</span>.
            Moving to the U.S. to study was a big step for me, but it has given me the opportunity to grow not only as a student but also as a future developer.🚀
          </p>
          <p className="text-base sm:text-lg mt-4 text-gray-700 dark:text-gray-300">
            I enjoy building websites, exploring new technologies, and collaborating on team projects. Currently, I&apos;m learning <span className="text-blue-600 dark:text-blue-400 font-semibold">JavaScript, React, and Next.js</span> while working on several web development projects.
          </p>
        </div>
        <div className="relative order-1 lg:order-2" tabIndex="0">
          <Image
            alt="Kotaro Shiba's photo"
            src="/about-shiba-photo.png"
            width={250}
            height={250}
            className="rounded-full shadow-lg border-4 border-white-500 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse border-2 border-teal-400 opacity-50"></div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8">
        <div className="relative w-full lg:w-auto">
          <Image
            alt="Utah landscape"
            src="/utah-landscape.png"
            width={300}
            height={200}
            className="rounded-lg shadow-md w-full max-w-sm lg:max-w-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-300 opacity-20 rounded-lg"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">My Journey 🌄</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            My goal is to become a <span className="font-bold text-red-500 dark:text-red-400">full-stack developer</span> who can create tools that solve real-world problems and make people&apos;s lives easier.
            Studying abroad has broadened my perspective and taught me the value of diverse experiences and cultural exchange.
            Every challenge I face here in the U.S. helps me grow both personally and professionally.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800 dark:text-gray-200">Beyond Coding 👨‍👩‍👦</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
            In my free time, I like to cook, read, and learn about different cultures. I believe that curiosity, persistence, and kindness go a long way—both in life and in code.
            These values guide me in everything I do, from solving complex programming problems to building meaningful relationships with others.
          </p>
        </div>
        <div className="relative order-1 lg:order-2 w-full lg:w-auto">
          <Image
            alt="Personal interests"
            src="/about-beyond-coding.png"
            width={300}
            height={250}
            className="rounded-lg shadow-md w-full max-w-sm lg:max-w-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-yellow-300 opacity-10 rounded-lg"></div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Let&apos;s Connect! 🤝</h2>
        <p className="text-base sm:text-lg mb-4 text-gray-700 dark:text-gray-300">
          Thank you for visiting my portfolio. I&apos;m always excited to take on new projects and challenges.
          Feel free to reach out—let&apos;s build something great together!
        </p>
        <div className="mb-6">
          <a 
            href="mailto:kos063@ensign.edu" 
            className="text-base sm:text-lg text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200 break-all"
          >
            📧 kos063@ensign.edu
          </a>
        </div>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <a href="http://instagram.com/sh.iba6294/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-logo.png" alt="Instagram" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/Shiba0315" target="_blank" rel="noopener noreferrer">
            <Image src="/github-logo.png" alt="GitHub" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/kotaro-shiba/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-logo.png" alt="LinkedIn" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 rounded hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
} 
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
