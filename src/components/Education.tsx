import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Full-Stack Developer - Second Year",
      institution: "YouCode | UM6P",
      location: "Youssoufia, Morocco",
      period: "2025 - 2026 / Currently",
      specialization: "Java - Angular",
      status: "In Progress"
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Faculté des sciences | Université Ibn Tofail",
      location: "Kenitra, Morocco",
      period: "2024 / Currently",
      specialization: "SMI (Sciences Mathématiques et Informatique)",
      status: "In Progress"
    },
    {
      degree: "BTS - Technician in Multimedia & Web Design",
      institution: "Centre Technique Mohammed VI",
      location: "Marrakech, Morocco",
      period: "2021 - 2023",
      specialization: "Multimedia and Web Conception",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      name: "SQL Certificate",
      issuer: "SoloLearn",
      year: "2023"
    },
    {
      name: "Deep Learning and AI Infrastructure",
      issuer: "Faculté des sciences Kenitra",
      year: "2024"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center gap-2">
            <GraduationCap className="w-7 h-7" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="gradient-border rounded-lg p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-lg text-pink-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 mb-2">{edu.location}</p>
                    <p className="text-gray-300">Specialization: {edu.specialization}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
                    <span className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-pink-500" />
                      {edu.period}
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm border ${
                      edu.status === 'In Progress'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                        : 'bg-green-500/20 text-green-300 border-green-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-pink-400 mb-8 flex items-center gap-2">
            <Award className="w-7 h-7" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="gradient-border rounded-lg p-6 card-hover">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-pink-400 mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">{cert.year}</p>
                  </div>
                  <Award className="w-8 h-8 text-pink-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
