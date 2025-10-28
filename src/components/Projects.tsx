import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "EventCraft",
      description: "Web application for event management enabling creation, planning, and tracking of events, with participant management and notifications.",
      technologies: ["Laravel", "MySQL", "JavaScript", "Axios"],
      githubLink: "https://github.com/imanezahri002"
    },
    {
      title: "Hospicare",
      description: "Hospital management web application enabling management of patients, appointments, and medical staff.",
      technologies: ["JEE", "Hibernate", "PostgreSQL", "Tomcat", "HTML", "Tailwind CSS", "JavaScript", "JSP", "JSTL"],
      githubLink: "https://github.com/imanezahri002"
    },
    {
      title: "Car Rental Application",
      description: "Web application for car rental management allowing fleet management, client handling, and reservations with REST API integration.",
      technologies: ["Spring Boot", "React JS", "PostgreSQL", "REST API"],
      githubLink: "https://github.com/imanezahri002"
    },
    {
      title: "Sports E-Learning Platform",
      description: "E-learning platform for sports with user management, course management, media handling, and performance tracking.",
      technologies: ["Laravel", "Docker", "PostgreSQL", "React JS", "JWT"],
      githubLink: "https://github.com/imanezahri002"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="gradient-border rounded-lg p-8 card-hover">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-pink-400">{project.title}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-pink-500/20">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
