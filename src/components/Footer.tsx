
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {currentYear} - Franchesca Carrasco | Portafolio Profesional
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:franchescaycarrasco@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/franchesca-carrasco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/franchescaycr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
