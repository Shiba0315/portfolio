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