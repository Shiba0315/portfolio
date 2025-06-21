import Image from "next/image";

export const metadata = {
  title: "Projects - My Portfolio",
  description: "Showcasing innovative projects crafted by Kotaro Shiba.",
};

export default function Projects() {
  const projects = [
    {
      id: 1,
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
    }
  ];

  return (
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