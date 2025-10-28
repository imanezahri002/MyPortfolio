import { User, Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-lg blur-xl"></div>
            <img
              src="/WhatsApp Image 2025-10-28 at 16.00.34.jpeg"
              alt="Imane Zahri Professional"
              className="relative w-full h-[500px] object-cover rounded-lg border-2 border-pink-500/30 card-hover"
            />
          </div>

          <div className="space-y-6">
            <div className="gradient-border rounded-lg p-6 card-hover">
              <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <User className="w-6 h-6" />
                Full-Stack Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate Full-Stack Developer currently in my second year at YouCode | UM6P,
                specializing in Java and Angular. With a strong foundation in both frontend and backend
                technologies, I create comprehensive web solutions that are both functional and beautiful.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My experience spans from developing REST APIs with Laravel and Spring Boot to building
                dynamic user interfaces with React and Angular. I'm committed to writing clean,
                maintainable code and following best practices in software development.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="gradient-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <span>+212 6 44999495</span>
                </div>
              </div>

              <div className="gradient-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <span>imanezahri4@gmail.com</span>
                </div>
              </div>

              <div className="gradient-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>Benguerir, Morocco</span>
                </div>
              </div>

              <div className="gradient-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 text-gray-300">
                  <Linkedin className="w-5 h-5 text-pink-500" />
                  <a href="https://www.linkedin.com/in/imane-zahri" target="_blank" rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors">
                    linkedin.com/in/imane-zahri
                  </a>
                </div>
              </div>

              <div className="gradient-border rounded-lg p-4 card-hover">
                <div className="flex items-center gap-3 text-gray-300">
                  <Github className="w-5 h-5 text-pink-500" />
                  <a href="https://github.com/imanezahri002" target="_blank" rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors">
                    github.com/imanezahri002
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
