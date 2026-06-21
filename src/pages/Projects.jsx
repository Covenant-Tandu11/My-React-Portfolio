import { ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReview';

const GithubIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Website",
      category: "FRONTEND",
      categoryColor: "text-purple-600",
      bgColor: "bg-purple-50/50 dark:bg-purple-900/20",
      description: "A responsive food ordering web app built with vanilla HTML, CSS, and JavaScript. Features a dynamic menu, interactive shopping cart with add/remove functionality, and real-time price calculations. Mobile-first design with smooth animations.",
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      github: "https://github.com/Covenant-Tandu11/Foody.git",
      liveDemo: "https://food-website-orpin-one.vercel.app/"
    },
    {
      id: 2,
      title: "To-do List App",
      category: "FRONTEND",
      categoryColor: "text-pink-600",
      bgColor: "bg-pink-50/50 dark:bg-pink-900/20",
      description: "A responsive task management app built with vanilla HTML, CSS, and JavaScript. Features add/edit/delete functionality, task completion tracking, and LocalStorage persistence. Clean UI with smooth animations and mobile-first design for productivity on the go.",
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
      github: "https://github.com/Covenant-Tandu11/to-do-list-.git",
      liveDemo: "https://to-do-list-beta-peach.vercel.app/"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050507] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header with Animation */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-purple-600"></div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">
                My Work
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent leading-tight">
              All Projects
            </h1>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150} className="h-full">
              <div 
                className="group bg-white dark:bg-[#0f111a] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Card Header with Icon & GitHub */}
                <div className={`${project.bgColor} p-6 flex items-center justify-between border-b border-gray-100 dark:border-white/5`}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all duration-300 shadow-sm"
                    aria-label="View source code"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>

                {/* Card Content  */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <p className={`text-xs font-bold uppercase tracking-wider ${project.categoryColor}`}>
                    {project.category}
                  </p>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Link */}
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors pt-2 group/link"
                  >
                    View Live Demo 
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;