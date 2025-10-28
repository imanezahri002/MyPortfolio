import { useState } from 'react';
import { Code2, Mail, MapPin, Linkedin, Github, ExternalLink, Briefcase, GraduationCap, Award } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="animated-bg"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-pink-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
                IMANE ZAHRI
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize hover:text-pink-500 transition-colors ${
                    activeSection === section ? 'text-pink-500' : 'text-gray-300'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/imane-zahri" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/imanezahri002" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 bg-black/80 border-t border-pink-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-pink-500" />
              <span className="text-gray-300">Imane Zahri - Full-Stack Developer</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="mailto:imanezahri4@gmail.com" className="text-gray-300 hover:text-pink-500 transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">imanezahri4@gmail.com</span>
              </a>
              <span className="text-gray-300 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Benguerir, Morocco</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
