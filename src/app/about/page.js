import Link from "next/link";

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
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
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
                  I&apos;m a passionate Computer Science student at Ensign
                  College, dedicated to learning and creating innovative web
                  solutions. My journey in technology began with a curiosity
                  about how things work on the internet, and it has evolved into
                  a deep passion for web development and software engineering.
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
                  Currently pursuing a degree in Computer Science with focus on
                  web development, algorithms, and software engineering
                  principles.
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
                    Develop expertise in both frontend and backend technologies
                    to create complete web applications.
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
                    Give back to the developer community by contributing to
                    meaningful open source projects.
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
                    Create applications that solve real-world problems and
                    improve people&apos;s lives.
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
