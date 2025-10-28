import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent text-glow">
                Imane Zahri
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-pink-400 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              JAVA / ANGULAR Specialist
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Passionate about building robust web applications with modern technologies.
              Specialized in Java, Spring Boot, Laravel, React, and Angular.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all glow"
              >
                Get In Touch
              </a>
              <a
                href="tel:+212644999495"
                className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all"
              >
                Call Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="/Generated Image October 28, 2025 - 4_41PM (1).png"
                alt="Imane Zahri"
                className="relative w-100 h-100 object-cover rounded-full border-4 border-pink-500 glow floating"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-pink-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
