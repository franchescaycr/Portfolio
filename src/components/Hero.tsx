
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const typeWriter = async () => {
      if (!textRef.current) return;
      
      const text = `¡Hola! Me llamo Franchesca y soy desarrolladora web con una gran pasión por aprender y crecer profesionalmente.`;
      textRef.current.textContent = "";
      
      for (let i = 0; i < text.length; i++) {
        if (textRef.current) {
          textRef.current.textContent += text.charAt(i);
          await new Promise(resolve => setTimeout(resolve, 40));
        }
      }
      
      setIsTypingDone(true);
    };

    const timer = setTimeout(() => {
      typeWriter();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 transition-colors duration-300">
            Bienvenido a Mi Portafolio
          </h1>
          <p 
            ref={textRef}
            className="text-xl leading-relaxed mb-8 h-16 md:h-12"
          ></p>
          <div 
            className={`flex flex-col md:flex-row gap-4 justify-center transition-all duration-500 ${
              isTypingDone ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium group">
              <a href="#projects" className="flex items-center">
                Ver Proyectos
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <a href="#contact">Contactar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
