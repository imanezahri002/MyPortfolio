import { Database, Code, Palette, GitBranch, TestTube, Settings, PenTool } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend",
      skills: ["Java", "Laravel", "PHP", "Spring Boot", "JEE"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React JS", "Next JS", "Angular", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "DevOps",
      skills: ["Docker", "Git"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Tools",
      skills: ["Postman", "Jira", "Enterprise Architect"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      skills: ["Figma"]
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing",
      skills: ["JUnit", "Mockito"]
    },
    // 👉 Nouvelle carte simple pour "Conception"
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Conception",
      skills: ["UML"]
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "B2" },
    { name: "English", level: "A2" }
  ];

  return (
    <section id="skills" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto"></div>
        </div>

        {/* ===== Technical Skills (avec Conception ajoutée) ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="gradient-border rounded-lg p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-pink-500">{category.icon}</div>
                <h3 className="text-xl font-bold text-pink-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Languages ===== */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-pink-400">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, index) => (
              <div key={index} className="gradient-border rounded-lg p-6 text-center card-hover">
                <h4 className="text-xl font-semibold text-white mb-2">{lang.name}</h4>
                <p className="text-pink-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Soft Skills ===== */}
        <div className="mt-12 gradient-border rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-pink-400">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Project Management", "Teamwork", "Analytical Thinking", "Agile", "Scrum"].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-pink-500/20 to-pink-600/20 text-pink-300 rounded-lg text-lg font-semibold border border-pink-500/30 card-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
