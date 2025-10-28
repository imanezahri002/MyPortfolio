import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="gradient-border rounded-lg p-8 card-hover">
              <h3 className="text-2xl font-bold text-pink-400 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a href="mailto:imanezahri4@gmail.com"
                  className="flex items-start gap-4 group">
                  <div className="p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white text-lg group-hover:text-pink-400 transition-colors">
                      imanezahri4@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+212644999495"
                  className="flex items-start gap-4 group">
                  <div className="p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white text-lg group-hover:text-pink-400 transition-colors">
                      +212 6 44999495
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white text-lg">Benguerir, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-pink-500/20">
                <p className="text-gray-400 text-sm mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/imane-zahri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-500/20 rounded-lg hover:bg-pink-500/30 transition-colors group">
                    <Linkedin className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://github.com/imanezahri002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-500/20 rounded-lg hover:bg-pink-500/30 transition-colors group">
                    <Github className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-pink-700 transition-all glow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
