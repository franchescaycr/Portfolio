
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Contacto</h2>
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">¡Hablemos!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="contact-item">
              <Mail className="text-primary" size={20} />
              <span>Email: </span>
              <a 
                href="mailto:franchescaycarrasco@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors"
              >
                franchescaycarrasco@gmail.com
              </a>
            </div>
            
            <div className="contact-item">
              <Linkedin className="text-primary" size={20} />
              <span>LinkedIn: </span>
              <a 
                href="https://www.linkedin.com/in/franchesca-carrasco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Mi Perfil
              </a>
            </div>
            
            <div className="contact-item">
              <Github className="text-primary" size={20} />
              <span>GitHub: </span>
              <a 
                href="https://github.com/franchescaycr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Mi GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
