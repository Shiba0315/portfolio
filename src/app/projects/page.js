<<<<<<< HEAD
import Link from 'next/link';
=======
import Image from "next/image";

export const metadata = {
  title: "Projects - My Portfolio",
  description: "Showcasing innovative projects crafted by Kotaro Shiba.",
};
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358

export default function Projects() {
  const projects = [
    {
      id: 1,
<<<<<<< HEAD
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      image: "🎨",
      github: "https://github.com/Shiba0315/portfolio",
      live: "https://shiba0315.github.io/portfolio",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "📋",
      github: "https://github.com/Shiba0315/task-manager",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using external APIs.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "🌤️",
      github: "https://github.com/Shiba0315/weather-app",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Redux", "Stripe", "Firebase"],
      image: "🛒",
      github: "https://github.com/Shiba0315/ecommerce",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with markdown support.",
      technologies: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
      image: "📝",
      github: "https://github.com/Shiba0315/blog-platform",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A dashboard for managing multiple social media accounts with analytics and scheduling features.",
      technologies: ["React", "Chart.js", "Node.js", "Socket.io"],
      image: "📊",
      github: "https://github.com/Shiba0315/social-dashboard",
      live: "#",
      featured: false
=======
      name: "SpaceXplorer 🚀",
      description: "Empowering civilians to explore space on their terms.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      link: "https://spacexplorer.com",
      emoji: "🚀"
    },
    {
      id: 2,
      name: "EcoTracker 🌿",
      description: "An app to track and reduce your carbon footprint.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://ecotracker.com",
      emoji: "🌿"
    },
    {
      id: 3,
      name: "FitFusion 💪",
      description: "A platform connecting trainers and fitness enthusiasts.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://fitfusion.com",
      emoji: "💪"
    },
    {
      id: 4,
      name: "Artify 🎨",
      description: "Empowering artists to showcase and sell their work.",
      technologies: ["Gatsby", "GraphQL", "Stripe"],
      link: "https://artify.com",
      emoji: "🎨"
    },
    {
      id: 5,
      name: "TravelMate 🌍",
      description: "Discover hidden gems around the world.",
      technologies: ["Next.js", "Google Maps API", "Sass"],
      link: "https://travelmate.com",
      emoji: "🌍"
    },
    {
      id: 6,
      name: "CodeCollab 👨‍💻",
      description: "A real-time code collaboration tool for devs.",
      technologies: ["React", "WebSockets", "Express.js"],
      link: "https://codecollab.com",
      emoji: "👨‍💻"
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
    }
  ];

  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and projects. Each project represents my passion for creating 
            innovative solutions and learning new technologies.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                    >
                      View Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            All Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-3xl mb-3">{project.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 text-white py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      Code
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I&apos;m always open to new opportunities and exciting projects. Let&apos;s discuss how we can collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kotaro.shiba@example.com"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get In Touch
            </a>
            <Link 
              href="/about"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
=======
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-200">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500 dark:from-gray-300 dark:to-blue-400">
          🚀 My Projects
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-3 sm:mt-4 px-4">
          A curated list of my most impactful work. Let&apos;s build something amazing together.
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative p-4 sm:p-6 rounded-xl shadow-xl backdrop-blur-md border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
                transform: 'translateY(50px)'
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-gray-100/20 dark:to-black/20"></div>
              
              <div className="flex items-center mb-3 sm:mb-4 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                  {project.emoji}
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold ml-3 sm:ml-4 text-gray-800 dark:text-white">
                  {project.name}
                </h2>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 relative z-10">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-teal-500 text-xs sm:text-sm px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center font-medium relative z-10 text-sm sm:text-base"
              >
                <span className="mr-2">🔥</span>
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-8 sm:mt-12 text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        Built with ❤️ by <span className="font-bold text-gray-600 dark:text-gray-400">Kotaro Shiba</span>
      </footer>
    </div>
  );
} 
>>>>>>> 5c1bc5c3271d7d77add359320b4b5421ad3ce358
