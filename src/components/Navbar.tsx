import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            VL
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>

            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-700">
              <a href="https://github.com/VivekLakum" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vivek-lakum-428a19365/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:connect.viveklakum@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
              <a href="https://github.com/VivekLakum" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vivek-lakum-428a19365/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:connect.viveklakum@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
