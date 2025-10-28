import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "AfricanSynergy",
      location: "Kenitra, Morocco",
      period: "June 2025 - August 2025",
      type: "Internship",
      responsibilities: [
        "Developed REST API with Laravel for a sports e-learning platform, managing users, courses, media, and performance tracking",
        "Designed UML models (use case, class, and sequence diagrams) to define software architecture and component interactions",
        "Collaborated with team using Git/GitHub for code management, pull request reviews, and branch workflow organization",
        "Set up development and deployment environment using Docker, ensuring consistent and portable configuration",
        "Built a car rental web application for managing fleet, clients, and reservations",
        "Consumed REST APIs developed with Spring Boot, integrated via React JS for a fluid and interactive interface",
        "Implemented dynamic components for displaying available vehicles, filtered search, and reservation management",
        "Enhanced user experience with interactive forms and optimized navigation"
      ],
      technologies: ["Laravel", "Docker", "PostgreSQL", "Git/GitHub", "UML", "JWT", "React JS", "Axios", "Bootstrap", "MySQL", "Spring Boot"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="gradient-border rounded-lg p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-white mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-500" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <span className="inline-block mt-4 md:mt-0 px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30">
                  {exp.type}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start gap-2">
                      <span className="text-pink-500 mt-1.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
