
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">Sobre Mí</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Me encanta enfrentar desafíos y explorar nuevas tecnologías que me permitan encontrar soluciones creativas y 
                efectivas.
              </p>
              <p>
                Por un tiempo, también me desempeñé como diseñadora UX/UI, trabajando en proyectos freelance donde realicé tareas 
                como diseño de interfaces, análisis de experiencia de usuario y prototipado. Esta experiencia me permitió entender 
                mejor la importancia de crear productos funcionales y atractivos enfocados en el usuario.
              </p>
              <p>
                Recientemente decidí tomarme una pausa profesional para dedicarme a mis hijos, pero durante este tiempo nunca dejé de 
                aprender. Me mantuve en constante capacitación y desarrollo de habilidades, consolidando mi perfil como autodidacta.
              </p>
              <p>
                Disfruto resolver problemas y trabajar en proyectos que combinen creatividad y funcionalidad. Siempre estoy en busca de 
                nuevas oportunidades para seguir aprendiendo y aportar valor con mi trabajo.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
