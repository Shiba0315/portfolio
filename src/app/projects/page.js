import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      image: "🎨",
      github: "https://github.com/Shiba0315/portfolio",
      live: "https://shiba0315.github.io/portfolio",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A full-stack task management application with user authentication, CRUD operations, and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "📋",
      github: "https://github.com/Shiba0315/task-manager",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that displays current weather conditions and forecasts using external APIs.",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      image: "🌤️",
      github: "https://github.com/Shiba0315/weather-app",
      live: "#",
      featured: false,
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A complete e-commerce solution with product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Redux", "Stripe", "Firebase"],
      image: "🛒",
      github: "https://github.com/Shiba0315/ecommerce",
      live: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Blog Platform",
      description:
        "A content management system for creating and managing blog posts with markdown support.",
      technologies: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
      image: "📝",
      github: "https://github.com/Shiba0315/blog-platform",
      live: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "A dashboard for managing multiple social media accounts with analytics and scheduling features.",
      technologies: ["React", "Chart.js", "Node.js", "Socket.io"],
      image: "📊",
      github: "https://github.com/Shiba0315/social-dashboard",
      live: "#",
      featured: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest work and projects. Each project represents my
            passion for creating innovative solutions and learning new
            technologies.
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
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
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
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
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
            I&apos;m always open to new opportunities and exciting projects.
            Let&apos;s discuss how we can collaborate!
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
