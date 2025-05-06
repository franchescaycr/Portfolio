
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 backdrop-blur-sm z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl text-primary font-quicksand font-bold">
            Franchesca Carrasco
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-primary focus:outline-none"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
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
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </a>
              <a 
                href="#projects" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Proyectos
              </a>
              <a 
                href="#uxui" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                UX/UI
              </a>
              <a 
                href="#contact" 
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
