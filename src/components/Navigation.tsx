
import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white/80 sticky top-0 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl text-primary font-quicksand font-bold">
            Franchesca Carrasco
          </Link>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#projects" className="font-medium hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#uxui" className="font-medium hover:text-primary transition-colors">
              UX/UI
            </a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
