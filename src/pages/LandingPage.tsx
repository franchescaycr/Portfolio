
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-6 flex flex-col flex-grow items-center justify-center py-12 text-center">
        <div 
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Franchesca Carrasco
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-700">
            Desarrollo Web & Diseño UX/UI
          </p>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-sm mb-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Bienvenido a mi portafolio profesional donde podrás conocer mis proyectos
              y experiencia en desarrollo web y diseño UX/UI.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Apasionada por crear soluciones digitales funcionales y estéticas
              que mejoran la experiencia del usuario.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium group px-8 py-6 text-lg">
              <Link to="/portfolio" className="flex items-center">
                Ver Portafolio
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:franchescaycarrasco@gmail.com"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/franchesca-carrasco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/franchescaycr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
